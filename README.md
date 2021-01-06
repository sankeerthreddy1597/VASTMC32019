# VAST2019_MiniChallenge3
CSE 578 - Data Visualization project

## files

YInt_LDA_1_0.csv has the followong extra columns:
- Dominant_Topic: id of topic
- Perc_Contribution: essentially a value that says how close the message is to _THIS_ particular topic. A threshold (eg. >0.3) can be used to only select the messages that are actually close to the topic.
- Topic_Keywords: Top keywords identified by LDA for _THIS_ topic.
- data: the message with some punctuation removed
- tokens: the identifed tokens
- lemma_tokens: the identified lemmas of tokens

## User Interface

- Tabbed navigation for different tasks, Resources, Sentiment, Communications
- Layouts designed in accordance with the mockups in the proposal
