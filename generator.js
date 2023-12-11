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
names = ['minah', 'greg']
adverbs = ['gleafuly', 'sadly', 'fappily']

verb = () => verbs[Math.floor(Math.random() * verbs.length)]
adverb = () => adverbs[Math.floor(Math.random() * adverbs.length)]
noun = () => nouns[Math.floor(Math.random() * nouns.length)]
adjective = () => adjectives[Math.floor(Math.random() * adjectives.length)]

constNoun = nouns[Math.floor(Math.random() * nouns.length)]
let nombre = names[Math.floor(Math.random() * names.length)]

let userNoun = prompt('enter a noun:')
let userAdverb = prompt('enter a adverb:')
let userAdjective = prompt('enter a adjective:')

nouns.push(userNoun)
adverbs.push(useradverb)
adjectives.push(userAdjective)


storys = {
    story1 : `once apon a time there was a magical ${constNoun} that that could produce a constant stream
               of ${adjective()} energy. clearly this ${adjective()} thing is too poweful to be left in
               the wrong ${adjective()} hands. so the wizard ${nombre} picked up his ${noun()} and sealed it 
               ${adverb()} destorying at least ${Math.floor(Math.random()*10000)} ${noun()}s in the process.
               after idk like ${Math.floor(Math.random()*100)} years you gotta decide if you wanna use the ${constNoun}
               yay? or Nay? ya gay` ,
    story2 : `this is yes`,
    story3 : `this is no`
}

console.log(storys.story1)

choice = prompt('yes or no?:')
while (choice != 'yes' && choice != 'no'){
    choice = prompt('yes or no?:')
}
if(choice === 'yes'){
    console.log(story.story2)
} else if(choice === 'no'){
        console.log(storys.story3)
}

