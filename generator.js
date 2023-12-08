 /*
theme: mad libs

maybe two stories to choose from
upon choosing the script will write the story in a mad lib type fassion

script outline:

+ story storer object
+ arrays for nouns, verbs and adverbs
+ varible set to equal a random noun/whatever from the list for ease of use probably takes out the word from array so words don't repeat
+ console.log the story from story storer with the varible above

extra:
be able to add new nouns verbs to the random words array
maybe branching paths two choices each for different endings: 1 to 2 to 4
 */



verbs = ['run', 'walk', 'jog']

nouns = ['table', 'chair', 'door' ]

adjectives = ['quick', 'smelly', 'bloated']

verb = () => verbs[Math.floor(Math.random() * verbs.length)]

noun = () => nouns[Math.floor(Math.random() * nouns.length)]

adjective = () => adjectives[Math.floor(Math.random() * adjectives.length)]


storys = {
    storey1 : `this is a ${verb()} ${verb()} ${noun()} ${adjective()} test`
}

console.log(storys.storey1)