echo "IMAGES"
hadoop fs -find input -iname *$1*.jpg | \
while read f
do
  echo "$f" && hadoop fs -cat "$f" 2> /dev/null > tmp.jpg && python3 nudity.py tmp.jpg
done

hadoop fs -find input -iname *$1*.jpeg | \
while read f
do
  echo "$f" && hadoop fs -cat "$f" 2> /dev/null > tmp.jpeg && | python3 nudity.py tmp.jpeg
done

hadoop fs -find input -iname *$1*.png | \
while read f
do
  echo "$f" && hadoop fs -cat "$f" 2> /dev/null > tmp.png && | python3 nudity.py tmp.png
done
echo "END_IMAGES"

echo "ARTICLES"
hadoop fs -find input -name *.html | \
while read f
do
  hadoop fs -cat "$f" 2> /dev/null | grep -q $1 && echo "$f" && hadoop fs -cat "$f" 2> /dev/null | python3 textcolor.py
done
echo "END_ARTICLES"