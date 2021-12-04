from nudenet import NudeClassifier
classifier = NudeClassifier()
import sys
res = classifier.classify(sys.argv[1])
print(res)