from dostoevsky.tokenization import RegexTokenizer
from dostoevsky.models import FastTextSocialNetworkModel
import fasttext
fasttext.FastText.eprint = lambda x: None
tokenizer = RegexTokenizer()

model = FastTextSocialNetworkModel(tokenizer=tokenizer)
import sys

messages = [''.join(sys.stdin.readlines())]

results = model.predict(messages, k=2)

for message, sentiment in zip(messages, results):
    print(sentiment)
