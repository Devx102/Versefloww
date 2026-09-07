let verse = document.querySelector(".verse");
let ref = document.querySelector(".ref");
let btn = document.querySelector(".btn").addEventListener("click", function () {
  const proverbs = [
    {
      verse: `"These are the proverbs of Solomon, David’s son, king of Israel."`,
      reference: "Proverbs 1:1",
    },
    {
      verse: `"Their purpose is to teach people wisdom and discipline, to help them understand the insights of the wise."`,
      reference: "Proverbs 1:2",
    },
    {
      verse: `"Their purpose is to teach people to live disciplined and successful lives, to help them do what is right, just, and fair."`,
      reference: "Proverbs 1:3",
    },
    {
      verse: `"These proverbs will give insight to the simple, knowledge and discernment to the young."`,
      reference: "Proverbs 1:4",
    },
    {
      verse: `"Let the wise listen to these proverbs and become even wiser. Let those with understanding receive guidance"`,
      reference: "Proverbs 1:5",
    },
    {
      verse: `"by exploring the meaning in these proverbs and parables, the words of the wise and their riddles."`,
      reference: "Proverbs 1:6",
    },
    {
      verse: `"Fear of the Lord is the foundation of true knowledge, but fools despise wisdom and discipline."`,
      reference: "Proverbs 1:7",
    },
    {
      verse: `"My child, listen when your father corrects you. Don’t neglect your mother’s instruction."`,
      reference: "Proverbs 1:8",
    },
    {
      verse: `"What you learn from them will crown you with grace and be a chain of honor around your neck."`,
      reference: "Proverbs 1:9",
    },
    {
      verse: `"My child, if sinners entice you, turn your back on them!"`,
      reference: "Proverbs 1:10",
    },
    {
      verse: `"They may say, “Come and join us. Let’s hide and kill someone! Just for fun, let’s ambush the innocent!"`,
      reference: "Proverbs 1:11",
    },
    {
      verse: `"Let’s swallow them alive, like the grave; let’s swallow them whole, like those who go down to the pit of death."`,
      reference: "Proverbs 1:12",
    },
    {
      verse: `"Think of the great things we’ll get! We’ll fill our houses with all the stuff we take."`,
      reference: "Proverbs 1:13",
    },
    {
      verse: `"Come, throw in your lot with us; we’ll all share the loot.”"`,
      reference: "Proverbs 1:14",
    },
    {
      verse: `"My child, don’t go along with them! Stay far away from their paths."`,
      reference: "Proverbs 1:15",
    },
    {
      verse: `"They rush to commit evil deeds. They hurry to commit murder."`,
      reference: "Proverbs 1:16",
    },
    {
      verse: `"If a bird sees a trap being set, it knows to stay away."`,
      reference: "Proverbs 1:17",
    },
    {
      verse: `"But these people set an ambush for themselves; they are trying to get themselves killed."`,
      reference: "Proverbs 1:18",
    },
    {
      verse: `"Such is the fate of all who are greedy for money; it robs them of life."`,
      reference: "Proverbs 1:19",
    },
    {
      verse: `"Wisdom shouts in the streets. She cries out in the public square."`,
      reference: "Proverbs 1:20",
    },
    {
      verse: `"She calls to the crowds along the main street, to those gathered in front of the city gate:"`,
      reference: "Proverbs 1:21",
    },
    {
      verse: `“How long, you simpletons, will you insist on being simpleminded? How long will you mockers relish your mocking? How long will you fools hate knowledge?"`,
      reference: "Proverbs 1:22",
    },
    {
      verse: `"Come and listen to my counsel. I’ll share my heart with you and make you wise."`,
      reference: "Proverbs 1:23",
    },
    {
      verse: `“I called you so often, but you wouldn’t come. I reached out to you, but you paid no attention."`,
      reference: "Proverbs 1:24",
    },
    {
      verse: `"You ignored my advice and rejected the correction I offered."`,
      reference: "Proverbs 1:25",
    },
    {
      verse: `"So I will laugh when you are in trouble! I will mock you when disaster overtakes you—"`,
      reference: "Proverbs 1:26",
    },
    {
      verse: `"when calamity overtakes you like a storm, when disaster engulfs you like a cyclone, and anguish and distress overwhelm you."`,
      reference: "Proverbs 1:27",
    },
    {
      verse: `“When they cry for help, I will not answer. Though they anxiously search for me, they will not find me."`,
      reference: "Proverbs 1:28",
    },
    {
      verse: `"For they hated knowledge and chose not to fear the Lord."`,
      reference: "Proverbs 1:29",
    },
    {
      verse: `"They rejected my advice and paid no attention when I corrected them."`,
      reference: "Proverbs 1:30",
    },
    {
      verse: `"Therefore, they must eat the bitter fruit of living their own way, choking on their own schemes."`,
      reference: "Proverbs 1:31",
    },
    {
      verse: `"For simpletons turn away from me—to death. Fools are destroyed by their own complacency."`,
      reference: "Proverbs 1:32",
    },
    {
      verse: `"But all who listen to me will live in peace, untroubled by fear of harm.”"`,
      reference: "Proverbs 1:33",
    },
    {
      verse: `"My child, listen to what I say, and treasure my commands."`,
      reference: "Proverbs 2:1",
    },
    {
      verse: `"Tune your ears to wisdom, and concentrate on understanding."`,
      reference: "Proverbs 2:2",
    },
    {
      verse: `"Cry out for insight, and ask for understanding."`,
      reference: "Proverbs 2:3",
    },
    {
      verse: `"Search for them as you would for silver; seek them like hidden treasures."`,
      reference: "Proverbs 2:4",
    },
    {
      verse: `"Then you will understand what it means to fear the Lord, and you will gain knowledge of God."`,
      reference: "Proverbs 2:5",
    },
    {
      verse: `"For the Lord grants wisdom! From his mouth come knowledge and understanding."`,
      reference: "Proverbs 2:6",
    },
    {
      verse: `"He grants a treasure of common sense to the honest. He is a shield to those who walk with integrity."`,
      reference: "Proverbs 2:7",
    },
    {
      verse: `"He guards the paths of the just and protects those who are faithful to him."`,
      reference: "Proverbs 2:8",
    },
    {
      verse: `"Then you will understand what is right, just, and fair, and you will find the right way to go."`,
      reference: "Proverbs 2:9",
    },
    {
      verse: `"For wisdom will enter your heart, and knowledge will fill you with joy."`,
      reference: "Proverbs 2:10",
    },
    {
      verse: `"Wise choices will watch over you. Understanding will keep you safe."`,
      reference: "Proverbs 2:11",
    },
    {
      verse: `"Wisdom will save you from evil people, from those whose words are twisted."`,
      reference: "Proverbs 2:12",
    },
    {
      verse: `"These men turn from the right way to walk down dark paths."`,
      reference: "Proverbs 2:13",
    },
    {
      verse: `"They take pleasure in doing wrong, and they enjoy the twisted ways of evil."`,
      reference: "Proverbs 2:14",
    },
    {
      verse: `"Their actions are crooked, and their ways are wrong."`,
      reference: "Proverbs 2:15",
    },
    {
      verse: `"Wisdom will save you from the immoral woman, from the seductive words of the promiscuous woman."`,
      reference: "Proverbs 2:16",
    },
    {
      verse: `"She has abandoned her husband and ignores the covenant she made before God."`,
      reference: "Proverbs 2:17",
    },
    {
      verse: `"Entering her house leads to death; it is the road to the grave."`,
      reference: "Proverbs 2:18",
    },
    {
      verse: `"The man who visits her is doomed. He will never reach the paths of life."`,
      reference: "Proverbs 2:19",
    },
    {
      verse: `"So follow the steps of the good, and stay on the paths of the righteous."`,
      reference: "Proverbs 2:20",
    },
    {
      verse: `"For only the godly will live in the land, and those with integrity will remain in it."`,
      reference: "Proverbs 2:21",
    },
    {
      verse: `"But the wicked will be removed from the land, and the treacherous will be uprooted."`,
      reference: "Proverbs 2:22",
    },
    {
      verse: `"My child, never forget the things I have taught you. Store my commands in your heart."`,
      reference: "Proverbs 3:1",
    },
    {
      verse: `"If you do this, you will live many years, and your life will be satisfying."`,
      reference: "Proverbs 3:2",
    },
    {
      verse: `"Never let loyalty and kindness leave you! Tie them around your neck as a reminder. Write them deep within your heart."`,
      reference: "Proverbs 3:3",
    },
    {
      verse: `"Then you will find favor with both God and people, and you will earn a good reputation."`,
      reference: "Proverbs 3:4",
    },
    {
      verse: `"Trust in the Lord with all your heart; do not depend on your own understanding."`,
      reference: "Proverbs 3:5",
    },
    {
      verse: `"Seek his will in all you do, and he will show you which path to take."`,
      reference: "Proverbs 3:6",
    },
    {
      verse: `"Don’t be impressed with your own wisdom. Instead, fear the Lord and turn away from evil."`,
      reference: "Proverbs 3:7",
    },
    {
      verse: `"Then you will have healing for your body and strength for your bones."`,
      reference: "Proverbs 3:8",
    },
    {
      verse: `"Honor the Lord with your wealth and with the best part of everything you produce."`,
      reference: "Proverbs 3:9",
    },
    {
      verse: `"Then he will fill your barns with grain, and your vats will overflow with good wine."`,
      reference: "Proverbs 3:10",
    },
    {
      verse: `"My child, don’t reject the Lord’s discipline, and don’t be upset when he corrects you."`,
      reference: "Proverbs 3:11",
    },
    {
      verse: `"For the Lord corrects those he loves, just as a father corrects a child in whom he delights."`,
      reference: "Proverbs 3:12",
    },
    {
      verse: `"Joyful is the person who finds wisdom, the one who gains understanding."`,
      reference: "Proverbs 3:13",
    },
    {
      verse: `"For wisdom is more profitable than silver, and her wages are better than gold."`,
      reference: "Proverbs 3:14",
    },
    {
      verse: `"Wisdom is more precious than rubies; nothing you desire can compare with her."`,
      reference: "Proverbs 3:15",
    },
    {
      verse: `"She offers you long life in her right hand, and riches and honor in her left."`,
      reference: "Proverbs 3:16",
    },
    {
      verse: `"She will guide you down delightful paths; all her ways are satisfying."`,
      reference: "Proverbs 3:17",
    },
    {
      verse: `"Wisdom is a tree of life to those who embrace her; happy are those who hold her tightly."`,
      reference: "Proverbs 3:18",
    },
    {
      verse: `"By wisdom the Lord founded the earth; by understanding he created the heavens."`,
      reference: "Proverbs 3:19",
    },
    {
      verse: `"By his knowledge the deep fountains of the earth burst forth, and the dew settles beneath the night sky."`,
      reference: "Proverbs 3:20",
    },
    {
      verse: `"My child, don’t lose sight of common sense and discernment. Hang on to them,"`,
      reference: "Proverbs 3:21",
    },
    {
      verse: `"for they will refresh your soul. They are like jewels on a necklace."`,
      reference: "Proverbs 3:22",
    },
    {
      verse: `"They keep you safe on your way, and your feet will not stumble."`,
      reference: "Proverbs 3:23",
    },
    {
      verse: `"You can go to bed without fear; you will lie down and sleep soundly."`,
      reference: "Proverbs 3:24",
    },
    {
      verse: `"You need not be afraid of sudden disaster or the destruction that comes upon the wicked,"`,
      reference: "Proverbs 3:25",
    },
    {
      verse: `"for the Lord is your security. He will keep your foot from being caught in a trap."`,
      reference: "Proverbs 3:26",
    },
    {
      verse: `"Do not withhold good from those who deserve it when it’s in your power to help them."`,
      reference: "Proverbs 3:27",
    },
    {
      verse: `"If you can help your neighbor now, don’t say, “Come back tomorrow, and then I’ll help you.”"`,
      reference: "Proverbs 3:28",
    },
    {
      verse: `"Don’t plot harm against your neighbor, for those who live nearby trust you."`,
      reference: "Proverbs 3:29",
    },
    {
      verse: `"Don’t pick a fight without reason, when no one has done you harm."`,
      reference: "Proverbs 3:30",
    },
    {
      verse: `"Don’t envy violent people or copy their ways."`,
      reference: "Proverbs 3:31",
    },
    {
      verse: `"Such wicked people are detestable to the Lord, but he offers his friendship to the godly."`,
      reference: "Proverbs 3:32",
    },
    {
      verse: `"The Lord curses the house of the wicked, but he blesses the home of the upright."`,
      reference: "Proverbs 3:33",
    },
    {
      verse: `"The Lord mocks the mockers but is gracious to the humble."`,
      reference: "Proverbs 3:34",
    },
    {
      verse: `"The wise inherit honor, but fools are put to shame!"`,
      reference: "Proverbs 3:35",
    },
    {
      verse: `"My children, listen when your father corrects you. Pay attention and learn good judgment,"`,
      reference: "Proverbs 4:1",
    },
    {
      verse: `"for I am giving you good guidance. Don’t turn away from my instructions."`,
      reference: "Proverbs 4:2",
    },
    {
      verse: `"For I, too, was once my father’s son, tenderly loved as my mother’s only child."`,
      reference: "Proverbs 4:3",
    },
    {
      verse: `"My father taught me, “Take my words to heart. Follow my commands, and you will live."`,
      reference: "Proverbs 4:4",
    },
    {
      verse: `"Get wisdom; develop good judgment. Don’t forget my words or turn away from them."`,
      reference: "Proverbs 4:5",
    },
    {
      verse: `"Don’t turn your back on wisdom, for she will protect you. Love her, and she will guard you."`,
      reference: "Proverbs 4:6",
    },
    {
      verse: `"Getting wisdom is the wisest thing you can do! And whatever else you do, develop good judgment."`,
      reference: "Proverbs 4:7",
    },
    {
      verse: `"If you prize wisdom, she will make you great. Embrace her, and she will honor you."`,
      reference: "Proverbs 4:8",
    },
    {
      verse: `"She will place a lovely wreath on your head; she will present you with a beautiful crown.”"`,
      reference: "Proverbs 4:9",
    },
    {
      verse: `"My child, listen to me and do as I say, and you will have a long, good life."`,
      reference: "Proverbs 4:10",
    },
    {
      verse: `"I will teach you wisdom’s ways and lead you in straight paths."`,
      reference: "Proverbs 4:11",
    },
    {
      verse: `"When you walk, you won’t be held back; when you run, you won’t stumble."`,
      reference: "Proverbs 4:12",
    },
    {
      verse: `"Take hold of my instructions; don’t let them go. Guard them, for they are the key to life."`,
      reference: "Proverbs 4:13",
    },
    {
      verse: `"Don’t do as the wicked do, and don’t follow the path of evildoers."`,
      reference: "Proverbs 4:14",
    },
    {
      verse: `"Don’t even think about it; don’t go that way. Turn away and keep moving."`,
      reference: "Proverbs 4:15",
    },
    {
      verse: `"For evil people can’t sleep until they’ve done their evil deed for the day. They can’t rest until they’ve caused someone to stumble."`,
      reference: "Proverbs 4:16",
    },
    {
      verse: `"They eat the food of wickedness and drink the wine of violence!"`,
      reference: "Proverbs 4:17",
    },
    {
      verse: `"The way of the righteous is like the first gleam of dawn, which shines ever brighter until the full light of day."`,
      reference: "Proverbs 4:18",
    },
    {
      verse: `"But the way of the wicked is like total darkness. They have no idea what they are stumbling over."`,
      reference: "Proverbs 4:19",
    },
    {
      verse: `"My child, pay attention to what I say. Listen carefully to my words."`,
      reference: "Proverbs 4:20",
    },
    {
      verse: `"Don’t lose sight of them. Let them penetrate deep into your heart,"`,
      reference: "Proverbs 4:21",
    },
    {
      verse: `"for they bring life to those who find them, and healing to their whole body."`,
      reference: "Proverbs 4:22",
    },
    {
      verse: `"Guard your heart above all else, for it determines the course of your life."`,
      reference: "Proverbs 4:23",
    },
    {
      verse: `"Avoid all perverse talk; stay away from corrupt speech."`,
      reference: "Proverbs 4:24",
    },
    {
      verse: `"Look straight ahead, and fix your eyes on what lies before you."`,
      reference: "Proverbs 4:25",
    },
    {
      verse: `"Mark out a straight path for your feet; stay on the safe path."`,
      reference: "Proverbs 4:26",
    },
    {
      verse: `"Don’t get sidetracked; keep your feet from following evil."`,
      reference: "Proverbs 4:27",
    },
    {
      verse: `"My son, pay attention to my wisdom; listen carefully to my wise counsel."`,
      reference: "Proverbs 5:1",
    },
    {
      verse: `"Then you will show discernment, and your lips will express what you’ve learned."`,
      reference: "Proverbs 5:2",
    },
    {
      verse: `"For the lips of an immoral woman are as sweet as honey, and her mouth is smoother than oil."`,
      reference: "Proverbs 5:3",
    },
    {
      verse: `"But in the end she is as bitter as poison, as dangerous as a double-edged sword."`,
      reference: "Proverbs 5:4",
    },
    {
      verse: `"Her feet go down to death; her steps lead straight to the grave."`,
      reference: "Proverbs 5:5",
    },
    {
      verse: `"For she cares nothing about the path to life. She staggers down a crooked trail and doesn’t realize it."`,
      reference: "Proverbs 5:6",
    },
    {
      verse: `"So now, my sons, listen to me. Never stray from what I am about to say:"`,
      reference: "Proverbs 5:7",
    },
    {
      verse: `"Stay away from her! Don’t go near the door of her house!"`,
      reference: "Proverbs 5:8",
    },
    {
      verse: `"If you do, you will lose your honor and will lose to merciless people all you have achieved."`,
      reference: "Proverbs 5:9",
    },
    {
      verse: `"Strangers will consume your wealth, and someone else will enjoy the fruit of your labor."`,
      reference: "Proverbs 5:10",
    },
    {
      verse: `"In the end you will groan in anguish when disease consumes your body."`,
      reference: "Proverbs 5:11",
    },
    {
      verse: `"You will say, “How I hated discipline! If only I had not ignored all the warnings!"`,
      reference: "Proverbs 5:12",
    },
    {
      verse: `"Oh, why didn’t I listen to my teachers? Why didn’t I pay attention to my instructors?"`,
      reference: "Proverbs 5:13",
    },
    {
      verse: `"I have come to the brink of utter ruin, and now I must face public disgrace.”"`,
      reference: "Proverbs 5:14",
    },
    {
      verse: `"Drink water from your own well—share your love only with your wife."`,
      reference: "Proverbs 5:15",
    },
    {
      verse: `"Why spill the water of your springs in the streets, having sex with just anyone?"`,
      reference: "Proverbs 5:16",
    },
    {
      verse: `"You should reserve it for yourselves. Never share it with strangers."`,
      reference: "Proverbs 5:17",
    },
    {
      verse: `"Let your wife be a fountain of blessing for you. Rejoice in the wife of your youth."`,
      reference: "Proverbs 5:18",
    },
    {
      verse: `"She is a loving deer, a graceful doe. Let her breasts satisfy you always. May you always be captivated by her love."`,
      reference: "Proverbs 5:19",
    },
    {
      verse: `"Why be captivated, my son, by an immoral woman, or fondle the breasts of a promiscuous woman?"`,
      reference: "Proverbs 5:20",
    },
    {
      verse: `"For the Lord sees clearly what a man does, examining every path he takes."`,
      reference: "Proverbs 5:21",
    },
    {
      verse: `"An evil man is held captive by his own sins; they are ropes that catch and hold him."`,
      reference: "Proverbs 5:22",
    },
    {
      verse: `"He will die for lack of self-control; he will be lost because of his great foolishness."`,
      reference: "Proverbs 5:23",
    },
    {
      verse: `"My child, if you have put up security for a friend’s debt or agreed to guarantee the debt of a stranger—"`,
      reference: "Proverbs 6:1",
    },
    {
      verse: `"if you have trapped yourself by your agreement and are caught by what you said—"`,
      reference: "Proverbs 6:2",
    },
    {
      verse: `"follow my advice and save yourself, for you have placed yourself at your friend’s mercy. Now swallow your pride; go and beg to have your name erased."`,
      reference: "Proverbs 6:3",
    },
    {
      verse: `"Don’t put it off; do it now! Don’t rest until you do."`,
      reference: "Proverbs 6:4",
    },
    {
      verse: `"Save yourself like a gazelle escaping from a hunter, like a bird fleeing from a net."`,
      reference: "Proverbs 6:5",
    },
    {
      verse: `"Take a lesson from the ants, you lazybones. Learn from their ways and become wise!"`,
      reference: "Proverbs 6:6",
    },
    {
      verse: `"Though they have no prince or governor or ruler to make them work,"`,
      reference: "Proverbs 6:7",
    },
    {
      verse: `"they labor hard all summer, gathering food for the winter."`,
      reference: "Proverbs 6:8",
    },
    {
      verse: `"But you, lazybones, how long will you sleep? When will you wake up?"`,
      reference: "Proverbs 6:9",
    },
    {
      verse: `"A little extra sleep, a little more slumber, a little folding of the hands to rest—"`,
      reference: "Proverbs 6:10",
    },
    {
      verse: `"then poverty will pounce on you like a bandit; scarcity will attack you like an armed robber."`,
      reference: "Proverbs 6:11",
    },
    {
      verse: `"What are worthless and wicked people like? They are constant liars,"`,
      reference: "Proverbs 6:12",
    },
    {
      verse: `"signaling their deceit with a wink of the eye, a nudge of the foot, or the wiggle of fingers."`,
      reference: "Proverbs 6:13",
    },
    {
      verse: `"Their perverted hearts plot evil, and they constantly stir up trouble."`,
      reference: "Proverbs 6:14",
    },
    {
      verse: `"But they will be destroyed suddenly, broken in an instant beyond all hope of healing."`,
      reference: "Proverbs 6:15",
    },
    {
      verse: `"There are six things the Lord hates—no, seven things he detests:"`,
      reference: "Proverbs 6:16",
    },
    {
      verse: `"haughty eyes, a lying tongue, hands that kill the innocent,"`,
      reference: "Proverbs 6:17",
    },
    {
      verse: `"a heart that plots evil, feet that race to do wrong,"`,
      reference: "Proverbs 6:18",
    },
    {
      verse: `"a false witness who pours out lies, a person who sows discord in a family."`,
      reference: "Proverbs 6:19",
    },
    {
      verse: `"My son, obey your father’s commands, and don’t neglect your mother’s instruction."`,
      reference: "Proverbs 6:20",
    },
    {
      verse: `"Keep their words always in your heart. Tie them around your neck."`,
      reference: "Proverbs 6:21",
    },
    {
      verse: `"When you walk, their counsel will lead you. When you sleep, they will protect you. When you wake up, they will advise you."`,
      reference: "Proverbs 6:22",
    },
    {
      verse: `"For their command is a lamp and their instruction a light; their corrective discipline is the way to life."`,
      reference: "Proverbs 6:23",
    },
    {
      verse: `"It will keep you from the immoral woman, from the smooth tongue of a promiscuous woman."`,
      reference: "Proverbs 6:24",
    },
    {
      verse: `"Don’t lust for her beauty. Don’t let her coy glances seduce you."`,
      reference: "Proverbs 6:25",
    },
    {
      verse: `"For a prostitute will bring you to poverty, but sleeping with another man’s wife will cost you your life."`,
      reference: "Proverbs 6:26",
    },
    {
      verse: `"Can a man scoop a flame into his lap and not have his clothes catch on fire?"`,
      reference: "Proverbs 6:27",
    },
    {
      verse: `"Can he walk on hot coals and not blister his feet?"`,
      reference: "Proverbs 6:28",
    },
    {
      verse: `"So it is with the man who sleeps with another man’s wife. He who embraces her will not go unpunished."`,
      reference: "Proverbs 6:29",
    },
    {
      verse: `"Excuses might be found for a thief who steals because he is starving."`,
      reference: "Proverbs 6:30",
    },
    {
      verse: `"But if he is caught, he must pay back seven times what he stole, even if he has to sell everything in his house."`,
      reference: "Proverbs 6:31",
    },
    {
      verse: `"But the man who commits adultery is an utter fool, for he destroys himself."`,
      reference: "Proverbs 6:32",
    },
    {
      verse: `"He will be wounded and disgraced. His shame will never be erased."`,
      reference: "Proverbs 6:33",
    },
    {
      verse: `"For the woman’s jealous husband will be furious, and he will show no mercy when he takes revenge."`,
      reference: "Proverbs 6:34",
    },
    {
      verse: `"He will accept no compensation, nor be satisfied with a payoff of any size."`,
      reference: "Proverbs 6:35",
    },
    {
      verse: `"Follow my advice, my son; always treasure my commands."`,
      reference: "Proverbs 7:1",
    },
    {
      verse: `"Obey my commands and live! Guard my instructions as you guard your own eyes."`,
      reference: "Proverbs 7:2",
    },
    {
      verse: `"Tie them on your fingers as a reminder. Write them deep within your heart."`,
      reference: "Proverbs 7:3",
    },
    {
      verse: `"Love wisdom like a sister; make insight a beloved member of your family."`,
      reference: "Proverbs 7:4",
    },
    {
      verse: `"Let them protect you from an affair with an immoral woman, from listening to the flattery of a promiscuous woman."`,
      reference: "Proverbs 7:5",
    },
    {
      verse: `"While I was at the window of my house, looking through the curtain,"`,
      reference: "Proverbs 7:6",
    },
    {
      verse: `"I saw some naive young men, and one in particular who lacked common sense."`,
      reference: "Proverbs 7:7",
    },
    {
      verse: `"He was crossing the street near the house of an immoral woman, strolling down the path by her house."`,
      reference: "Proverbs 7:8",
    },
    {
      verse: `"It was at twilight, in the evening, as deep darkness fell."`,
      reference: "Proverbs 7:9",
    },
    {
      verse: `"The woman approached him, seductively dressed and sly of heart."`,
      reference: "Proverbs 7:10",
    },
    {
      verse: `"She was the brash, rebellious type, never content to stay at home."`,
      reference: "Proverbs 7:11",
    },
    {
      verse: `"She is often in the streets and markets, soliciting at every corner."`,
      reference: "Proverbs 7:12",
    },
    {
      verse: `"She threw her arms around him and kissed him, and with a brazen look she said,"`,
      reference: "Proverbs 7:13",
    },
    {
      verse: `“I’ve just made my peace offerings and fulfilled my vows."`,
      reference: "Proverbs 7:14",
    },
    {
      verse: `"You’re the one I was looking for! I came out to find you, and here you are!"`,
      reference: "Proverbs 7:15",
    },
    {
      verse: `"My bed is spread with beautiful blankets, with colored sheets of Egyptian linen."`,
      reference: "Proverbs 7:16",
    },
    {
      verse: `"I’ve perfumed my bed with myrrh, aloes, and cinnamon."`,
      reference: "Proverbs 7:17",
    },
    {
      verse: `"Come, let’s drink our fill of love until morning. Let’s enjoy each other’s caresses,"`,
      reference: "Proverbs 7:18",
    },
    {
      verse: `"for my husband is not home. He’s away on a long trip."`,
      reference: "Proverbs 7:19",
    },
    {
      verse: `"He has taken a wallet full of money with him and won’t return until later this month."`,
      reference: "Proverbs 7:20",
    },
    {
      verse: `"So she seduced him with her pretty speech and enticed him with her flattery."`,
      reference: "Proverbs 7:21",
    },
    {
      verse: `"He followed her at once, like an ox going to the slaughter. He was like a stag caught in a trap,"`,
      reference: "Proverbs 7:22",
    },
    {
      verse: `"awaiting the arrow that would pierce its heart. He was like a bird flying into a snare, little knowing it would cost him his life."`,
      reference: "Proverbs 7:23",
    },
    {
      verse: `"So listen to me, my sons, and pay attention to my words."`,
      reference: "Proverbs 7:24",
    },
    {
      verse: `"Don’t let your hearts stray away toward her. Don’t wander down her wayward path."`,
      reference: "Proverbs 7:25",
    },
    {
      verse: `"For she has been the ruin of many; many men have been her victims."`,
      reference: "Proverbs 7:26",
    },
    {
      verse: `"Her house is the road to the grave. Her bedroom is the den of death."`,
      reference: "Proverbs 7:27",
    },
    {
      verse: `"Listen as Wisdom calls out! Hear as understanding raises her voice!"`,
      reference: "Proverbs 8:1",
    },
    {
      verse: `"On the hilltop along the road, she takes her stand at the crossroads."`,
      reference: "Proverbs 8:2",
    },
    {
      verse: `"By the gates at the entrance to the town, on the road leading in, she cries aloud,"`,
      reference: "Proverbs 8:3",
    },
    {
      verse: `“I call to you, to all of you! I raise my voice to all people."`,
      reference: "Proverbs 8:4",
    },
    {
      verse: `"You simple people, use good judgment. You foolish people, show some understanding."`,
      reference: "Proverbs 8:5",
    },
    {
      verse: `"Listen to me! For I have important things to tell you. Everything I say is right,"`,
      reference: "Proverbs 8:6",
    },
    {
      verse: `"for I speak the truth and detest every kind of deception."`,
      reference: "Proverbs 8:7",
    },
    {
      verse: `"My advice is wholesome. There is nothing devious or crooked in it."`,
      reference: "Proverbs 8:8",
    },
    {
      verse: `"My words are plain to anyone with understanding, clear to those with knowledge."`,
      reference: "Proverbs 8:9",
    },
    {
      verse: `"Choose my instruction rather than silver, and knowledge rather than pure gold."`,
      reference: "Proverbs 8:10",
    },
    {
      verse: `"For wisdom is far more valuable than rubies. Nothing you desire can compare with it."`,
      reference: "Proverbs 8:11",
    },
    {
      verse: `"I, Wisdom, live together with good judgment. I know where to discover knowledge and discernment."`,
      reference: "Proverbs 8:12",
    },
    {
      verse: `"All who fear the Lord will hate evil. Therefore, I hate pride and arrogance, corruption and perverse speech."`,
      reference: "Proverbs 8:13",
    },
    {
      verse: `"Common sense and success belong to me. Insight and strength are mine."`,
      reference: "Proverbs 8:14",
    },
    {
      verse: `"Because of me, kings reign, and rulers make just decrees."`,
      reference: "Proverbs 8:15",
    },
    {
      verse: `"Rulers lead with my help, and nobles make righteous judgments."`,
      reference: "Proverbs 8:16",
    },
    {
      verse: `"I love all who love me. Those who search will surely find me."`,
      reference: "Proverbs 8:17",
    },
    {
      verse: `"I have riches and honor, as well as enduring wealth and justice."`,
      reference: "Proverbs 8:18",
    },
    {
      verse: `"My gifts are better than gold, even the purest gold, my wages better than sterling silver!"`,
      reference: "Proverbs 8:19",
    },
    {
      verse: `"I walk in righteousness, in paths of justice."`,
      reference: "Proverbs 8:20",
    },
    {
      verse: `"Those who love me inherit wealth. I will fill their treasuries."`,
      reference: "Proverbs 8:21",
    },
    {
      verse: `"The Lord formed me from the beginning, before he created anything else."`,
      reference: "Proverbs 8:22",
    },
    {
      verse: `"I was appointed in ages past, at the very first, before the earth began."`,
      reference: "Proverbs 8:23",
    },
    {
      verse: `"I was born before the oceans were created, before the springs bubbled forth their waters."`,
      reference: "Proverbs 8:24",
    },
    {
      verse: `"Before the mountains were formed, before the hills, I was born—"`,
      reference: "Proverbs 8:25",
    },
    {
      verse: `"before he had made the earth and fields and the first handfuls of soil."`,
      reference: "Proverbs 8:26",
    },
    {
      verse: `"I was there when he established the heavens, when he drew the horizon on the oceans."`,
      reference: "Proverbs 8:27",
    },
    {
      verse: `"I was there when he set the clouds above, when he established springs deep in the earth."`,
      reference: "Proverbs 8:28",
    },
    {
      verse: `"I was there when he set the limits of the seas, so they would not spread beyond their boundaries. And when he marked off the earth’s foundations,"`,
      reference: "Proverbs 8:29",
    },
    {
      verse: `"I was the architect at his side. I was his constant delight, rejoicing always in his presence."`,
      reference: "Proverbs 8:30",
    },
    {
      verse: `"And how happy I was with the world he created; how I rejoiced with the human family!"`,
      reference: "Proverbs 8:31",
    },
    {
      verse: `"And so, my children, listen to me, for all who follow my ways are joyful."`,
      reference: "Proverbs 8:32",
    },
    {
      verse: `"Listen to my instruction and be wise. Don’t ignore it."`,
      reference: "Proverbs 8:33",
    },
    {
      verse: `"Joyful are those who listen to me, watching for me daily at my gates, waiting for me outside my home!"`,
      reference: "Proverbs 8:34",
    },
    {
      verse: `"For whoever finds me finds life and receives favor from the Lord."`,
      reference: "Proverbs 8:35",
    },
    {
      verse: `"But those who miss me injure themselves. All who hate me love death."`,
      reference: "Proverbs 8:36",
    },
    {
      verse: `"Wisdom has built her house; she has carved its seven columns."`,
      reference: "Proverbs 9:1",
    },
    {
      verse: `"She has prepared a great banquet, mixed the wines, and set the table."`,
      reference: "Proverbs 9:2",
    },
    {
      verse: `"She has sent her servants to invite everyone to come. She calls out from the heights overlooking the city."`,
      reference: "Proverbs 9:3",
    },
    {
      verse: `"Come in with me,” she urges the simple. To those who lack good judgment, she says,"`,
      reference: "Proverbs 9:4",
    },
    {
      verse: `"Come, eat my food, and drink the wine I have mixed."`,
      reference: "Proverbs 9:5",
    },
    {
      verse: `"Leave your simple ways behind, and begin to live; learn to use good judgment."`,
      reference: "Proverbs 9:6",
    },
    {
      verse: `"Anyone who rebukes a mocker will get an insult in return. Anyone who corrects the wicked will get hurt."`,
      reference: "Proverbs 9:7",
    },
    {
      verse: `"So don’t bother correcting mockers; they will only hate you. But correct the wise, and they will love you."`,
      reference: "Proverbs 9:8",
    },
    {
      verse: `"Instruct the wise, and they will be even wiser. Teach the righteous, and they will learn even more."`,
      reference: "Proverbs 9:9",
    },
    {
      verse: `"Fear of the Lord is the foundation of wisdom. Knowledge of the Holy One results in good judgment."`,
      reference: "Proverbs 9:10",
    },
    {
      verse: `"Wisdom will multiply your days and add years to your life."`,
      reference: "Proverbs 9:11",
    },
    {
      verse: `"If you become wise, you will be the one to benefit. If you scorn wisdom, you will be the one to suffer."`,
      reference: "Proverbs 9:12",
    },
    {
      verse: `"The woman named Folly is brash. She is ignorant and doesn’t know it."`,
      reference: "Proverbs 9:13",
    },
    {
      verse: `"She sits in her doorway on the heights overlooking the city."`,
      reference: "Proverbs 9:14",
    },
    {
      verse: `"She calls out to men going by who are minding their own business."`,
      reference: "Proverbs 9:15",
    },
    {
      verse: `"Come in with me,” she urges the simple. To those who lack good judgment, she says,"`,
      reference: "Proverbs 9:16",
    },
    {
      verse: `"Stolen water is refreshing; food eaten in secret tastes the best!"`,
      reference: "Proverbs 9:17",
    },
    {
      verse: `"But little do they know that the dead are there. Her guests are in the depths of the grave."`,
      reference: "Proverbs 9:18",
    },
    {
      verse: `"The proverbs of Solomon: A wise child brings joy to a father; a foolish child brings grief to a mother."`,
      reference: "Proverbs 10:1",
    },
    {
      verse: `"Tainted wealth has no lasting value, but right living can save your life."`,
      reference: "Proverbs 10:2",
    },
    {
      verse: `"The Lord will not let the godly go hungry, but he refuses to satisfy the craving of the wicked."`,
      reference: "Proverbs 10:3",
    },
    {
      verse: `"Lazy people are soon poor; hard workers get rich."`,
      reference: "Proverbs 10:4",
    },
    {
      verse: `"A wise youth harvests in the summer, but one who sleeps during harvest is a disgrace."`,
      reference: "Proverbs 10:5",
    },
    {
      verse: `"The godly are showered with blessings; the words of the wicked conceal violent intentions."`,
      reference: "Proverbs 10:6",
    },
    {
      verse: `"We have happy memories of the godly, but the name of a wicked person rots away."`,
      reference: "Proverbs 10:7",
    },
    {
      verse: `"The wise are glad to be instructed, but babbling fools fall flat on their faces."`,
      reference: "Proverbs 10:8",
    },
    {
      verse: `"People with integrity walk safely, but those who follow crooked paths will be exposed."`,
      reference: "Proverbs 10:9",
    },
    {
      verse: `"People who wink at wrong cause trouble, but a bold reproof promotes peace."`,
      reference: "Proverbs 10:10",
    },
    {
      verse: `"The words of the godly are a life-giving fountain; the words of the wicked conceal violent intentions."`,
      reference: "Proverbs 10:11",
    },
    {
      verse: `"Hatred stirs up quarrels, but love makes up for all offenses."`,
      reference: "Proverbs 10:12",
    },
    {
      verse: `"Wise words come from the lips of people with understanding, but those lacking sense will be beaten with a rod."`,
      reference: "Proverbs 10:13",
    },
    {
      verse: `"Wise people treasure knowledge, but the babbling of a fool invites disaster."`,
      reference: "Proverbs 10:14",
    },
    {
      verse: `"The wealth of the rich is their fortress; the poverty of the poor is their destruction."`,
      reference: "Proverbs 10:15",
    },
    {
      verse: `"The earnings of the godly enhance their lives, but evil people squander their money on sin."`,
      reference: "Proverbs 10:16",
    },
    {
      verse: `"People who accept discipline are on the pathway to life, but those who ignore correction will go astray."`,
      reference: "Proverbs 10:17",
    },
    {
      verse: `"Hiding hatred makes you a liar; slandering others makes you a fool."`,
      reference: "Proverbs 10:18",
    },
    {
      verse: `"Too much talk leads to sin. Be sensible and keep your mouth shut."`,
      reference: "Proverbs 10:19",
    },
    {
      verse: `"The words of the godly are like sterling silver; the heart of a fool is worthless."`,
      reference: "Proverbs 10:20",
    },
    {
      verse: `"The words of the godly encourage many, but fools are destroyed by their lack of common sense."`,
      reference: "Proverbs 10:21",
    },
    {
      verse: `"The blessing of the Lord makes a person rich, and he adds no sorrow with it."`,
      reference: "Proverbs 10:22",
    },
    {
      verse: `"Doing wrong is fun for a fool, but living wisely brings pleasure to the sensible."`,
      reference: "Proverbs 10:23",
    },
    {
      verse: `"The fears of the wicked will be fulfilled; the hopes of the godly will be granted."`,
      reference: "Proverbs 10:24",
    },
    {
      verse: `"When the storms of life come, the wicked are whirled away, but the godly have a lasting foundation."`,
      reference: "Proverbs 10:25",
    },
    {
      verse: `"Lazy people irritate their employers, like vinegar to the teeth or smoke in the eyes."`,
      reference: "Proverbs 10:26",
    },
    {
      verse: `"Fear of the Lord lengthens one’s life, but the years of the wicked are cut short."`,
      reference: "Proverbs 10:27",
    },
    {
      verse: `"The hopes of the godly result in happiness, but the expectations of the wicked come to nothing."`,
      reference: "Proverbs 10:28",
    },
    {
      verse: `"The way of the Lord is a stronghold to those with integrity, but it destroys the wicked."`,
      reference: "Proverbs 10:29",
    },
    {
      verse: `"The godly will never be disturbed, but the wicked will be removed from the land."`,
      reference: "Proverbs 10:30",
    },
    {
      verse: `"The mouth of the godly person gives wise advice, but the tongue that deceives will be cut off."`,
      reference: "Proverbs 10:31",
    },
    {
      verse: `"The lips of the godly speak helpful words, but the mouth of the wicked speaks perverse words."`,
      reference: "Proverbs 10:32",
    },
    {
      verse: `"The Lord detests the use of dishonest scales, but he delights in accurate weights."`,
      reference: "Proverbs 11:1",
    },
    {
      verse: `"Pride leads to disgrace, but with humility comes wisdom."`,
      reference: "Proverbs 11:2",
    },
    {
      verse: `"Honesty guides good people; dishonesty destroys treacherous people."`,
      reference: "Proverbs 11:3",
    },
    {
      verse: `"Riches won’t help on the day of judgment, but right living can save you from death."`,
      reference: "Proverbs 11:4",
    },
    {
      verse: `"The godly are directed by honesty; the wicked fall beneath their load of sin."`,
      reference: "Proverbs 11:5",
    },
    {
      verse: `"The godliness of good people rescues them; the ambition of treacherous people traps them."`,
      reference: "Proverbs 11:6",
    },
    {
      verse: `"When the wicked die, their hopes die with them, for they rely on their own feeble strength."`,
      reference: "Proverbs 11:7",
    },
    {
      verse: `"The godly are rescued from trouble, and it falls on the wicked instead."`,
      reference: "Proverbs 11:8",
    },
    {
      verse: `"With their words, the godless destroy their friends, but knowledge will rescue the righteous."`,
      reference: "Proverbs 11:9",
    },
    {
      verse: `"The whole city celebrates when the godly succeed; they shout for joy when the wicked die."`,
      reference: "Proverbs 11:10",
    },
    {
      verse: `"Upright citizens are good for a city and make it prosper, but the talk of the wicked tears it apart."`,
      reference: "Proverbs 11:11",
    },
    {
      verse: `"It is foolish to belittle one’s neighbor; a sensible person keeps quiet."`,
      reference: "Proverbs 11:12",
    },
    {
      verse: `"A gossip goes around telling secrets, but those who are trustworthy can keep a confidence."`,
      reference: "Proverbs 11:13",
    },
    {
      verse: `"Without wise leadership, a nation falls; there is safety in having many advisers."`,
      reference: "Proverbs 11:14",
    },
    {
      verse: `"There’s danger in putting up security for a stranger’s debt; it’s safer not to guarantee another person’s debt."`,
      reference: "Proverbs 11:15",
    },
    {
      verse: `"A gracious woman gains respect, but ruthless men gain only wealth."`,
      reference: "Proverbs 11:16",
    },
    {
      verse: `"Your kindness will reward you, but your cruelty will destroy you."`,
      reference: "Proverbs 11:17",
    },
    {
      verse: `"Evil people get rich for the moment, but the reward of the godly will last."`,
      reference: "Proverbs 11:18",
    },
    {
      verse: `"Godly people find life; evil people find death."`,
      reference: "Proverbs 11:19",
    },
    {
      verse: `"The Lord detests people with crooked hearts, but he delights in those with integrity."`,
      reference: "Proverbs 11:20",
    },
    {
      verse: `"Evil people will surely be punished, but the children of the godly will go free."`,
      reference: "Proverbs 11:21",
    },
    {
      verse: `"A beautiful woman who lacks discretion is like a gold ring in a pig’s snout."`,
      reference: "Proverbs 11:22",
    },
    {
      verse: `"The godly can look forward to a reward, while the wicked can expect only judgment."`,
      reference: "Proverbs 11:23",
    },
    {
      verse: `"Give freely and become more wealthy; be stingy and lose everything."`,
      reference: "Proverbs 11:24",
    },
    {
      verse: `"The generous will prosper; those who refresh others will themselves be refreshed."`,
      reference: "Proverbs 11:25",
    },
    {
      verse: `"People curse those who hoard their grain, but they bless the one who sells in time of need."`,
      reference: "Proverbs 11:26",
    },
    {
      verse: `"If you search for good, you will find favor; but if you search for evil, it will find you!"`,
      reference: "Proverbs 11:27",
    },
    {
      verse: `"Trust in your money and down you go! But the godly flourish like leaves in spring."`,
      reference: "Proverbs 11:28",
    },
    {
      verse: `"Those who bring trouble on their families inherit the wind. The fool will be a servant to the wise."`,
      reference: "Proverbs 11:29",
    },
    {
      verse: `"The seeds of good deeds become a tree of life; a wise person wins friends."`,
      reference: "Proverbs 11:30",
    },
    {
      verse: `"If the righteous are rewarded here on earth, what will happen to wicked sinners?"`,
      reference: "Proverbs 11:31",
    },
    {
      verse: `"To learn, you must love discipline; it is stupid to hate correction."`,
      reference: "Proverbs 12:1",
    },
    {
      verse: `"The Lord approves of those who are good, but he condemns those who plan wickedness."`,
      reference: "Proverbs 12:2",
    },
    {
      verse: `"Wickedness never brings stability, but the godly have deep roots."`,
      reference: "Proverbs 12:3",
    },
    {
      verse: `"A worthy wife is a crown for her husband, but a disgraceful woman is like cancer in his bones."`,
      reference: "Proverbs 12:4",
    },
    {
      verse: `"The plans of the godly are just; the advice of the wicked is treacherous."`,
      reference: "Proverbs 12:5",
    },
    {
      verse: `"The words of the wicked are like a murderous ambush, but the words of the godly save lives."`,
      reference: "Proverbs 12:6",
    },
    {
      verse: `"The wicked die and disappear, but the family of the godly stands firm."`,
      reference: "Proverbs 12:7",
    },
    {
      verse: `"A sensible person wins admiration, but a warped mind is despised."`,
      reference: "Proverbs 12:8",
    },
    {
      verse: `"Better to be an ordinary person with a servant than to be self-important but have no food."`,
      reference: "Proverbs 12:9",
    },
    {
      verse: `"The godly care for their animals, but the wicked are always cruel."`,
      reference: "Proverbs 12:10",
    },
    {
      verse: `"A hard worker has plenty of food, but a person who chases fantasies has no sense."`,
      reference: "Proverbs 12:11",
    },
    {
      verse: `"Thieves are jealous of each other’s loot, but the godly are well rooted and bear their own fruit."`,
      reference: "Proverbs 12:12",
    },
    {
      verse: `"The wicked are trapped by their own words, but the godly escape such trouble."`,
      reference: "Proverbs 12:13",
    },
    {
      verse: `"Wise words bring many benefits, and hard work brings rewards."`,
      reference: "Proverbs 12:14",
    },
    {
      verse: `"Fools think their own way is right, but the wise listen to others."`,
      reference: "Proverbs 12:15",
    },
    {
      verse: `"A fool is quick-tempered, but a wise person stays calm when insulted."`,
      reference: "Proverbs 12:16",
    },
    {
      verse: `"An honest witness tells the truth; a false witness tells lies."`,
      reference: "Proverbs 12:17",
    },
    {
      verse: `"Some people make cutting remarks, but the words of the wise bring healing."`,
      reference: "Proverbs 12:18",
    },
    {
      verse: `"Truthful words stand the test of time, but lies are soon exposed."`,
      reference: "Proverbs 12:19",
    },
    {
      verse: `"Deceit fills hearts that are plotting evil; joy fills hearts that are planning peace!"`,
      reference: "Proverbs 12:20",
    },
    {
      verse: `"No harm comes to the godly, but the wicked have their fill of trouble."`,
      reference: "Proverbs 12:21",
    },
    {
      verse: `"The Lord detests lying lips, but he delights in those who tell the truth."`,
      reference: "Proverbs 12:22",
    },
    {
      verse: `"The wise don’t make a show of their knowledge, but fools broadcast their foolishness."`,
      reference: "Proverbs 12:23",
    },
    {
      verse: `"Work hard and become a leader; be lazy and become a slave."`,
      reference: "Proverbs 12:24",
    },
    {
      verse: `"Worry weighs a person down; an encouraging word cheers a person up."`,
      reference: "Proverbs 12:25",
    },
    {
      verse: `"The godly give good advice to their friends; the wicked lead them astray."`,
      reference: "Proverbs 12:26",
    },
    {
      verse: `"Lazy people don’t even cook the game they catch, but the diligent make use of everything they find."`,
      reference: "Proverbs 12:27",
    },
    {
      verse: `"The way of the godly leads to life; that path does not lead to death."`,
      reference: "Proverbs 12:28",
    },
    {
      verse: `"A wise child accepts a parent’s discipline; a mocker refuses to listen to correction."`,
      reference: "Proverbs 13:1",
    },
    {
      verse: `"Wise words will win you a good meal, but treacherous people have an appetite for violence."`,
      reference: "Proverbs 13:2",
    },
    {
      verse: `"Those who control their tongue will have a long life; opening your mouth can ruin everything."`,
      reference: "Proverbs 13:3",
    },
    {
      verse: `"Lazy people want much but get little, but those who work hard will prosper."`,
      reference: "Proverbs 13:4",
    },
    {
      verse: `"The godly hate lies; the wicked cause shame and disgrace."`,
      reference: "Proverbs 13:5",
    },
    {
      verse: `"Godliness guards the path of the blameless, but the evil are misled by sin."`,
      reference: "Proverbs 13:6",
    },
    {
      verse: `"Some who are poor pretend to be rich; others who are rich pretend to be poor."`,
      reference: "Proverbs 13:7",
    },
    {
      verse: `"The rich can pay a ransom for their lives, but the poor won’t even get threatened."`,
      reference: "Proverbs 13:8",
    },
    {
      verse: `"The life of the godly is full of light and joy, but the light of the wicked will be snuffed out."`,
      reference: "Proverbs 13:9",
    },
    {
      verse: `"Pride leads to conflict; those who take advice are wise."`,
      reference: "Proverbs 13:10",
    },
    {
      verse: `"Wealth from get-rich-quick schemes quickly disappears; wealth from hard work grows over time."`,
      reference: "Proverbs 13:11",
    },
    {
      verse: `"Hope deferred makes the heart sick, but a dream fulfilled is a tree of life."`,
      reference: "Proverbs 13:12",
    },
    {
      verse: `"People who despise advice are asking for trouble; those who respect a command will succeed."`,
      reference: "Proverbs 13:13",
    },
    {
      verse: `"The instruction of the wise is like a life-giving fountain; those who accept it avoid the snares of death."`,
      reference: "Proverbs 13:14",
    },
    {
      verse: `"A person with good sense is respected; a treacherous person is headed for destruction."`,
      reference: "Proverbs 13:15",
    },
    {
      verse: `"Wise people think before they act; fools don’t—and even brag about their foolishness."`,
      reference: "Proverbs 13:16",
    },
    {
      verse: `"An unreliable messenger stumbles into trouble, but a reliable messenger brings healing."`,
      reference: "Proverbs 13:17",
    },
    {
      verse: `"If you ignore criticism, you will end in poverty and disgrace; if you accept correction, you will be honored."`,
      reference: "Proverbs 13:18",
    },
    {
      verse: `"It is pleasant to see dreams come true, but fools refuse to turn from evil to attain them."`,
      reference: "Proverbs 13:19",
    },
    {
      verse: `"Walk with the wise and become wise; associate with fools and get in trouble."`,
      reference: "Proverbs 13:20",
    },
    {
      verse: `"Trouble chases sinners, while blessings reward the righteous."`,
      reference: "Proverbs 13:21",
    },
    {
      verse: `"Good people leave an inheritance to their grandchildren, but the sinner’s wealth passes to the godly."`,
      reference: "Proverbs 13:22",
    },
    {
      verse: `"A poor person’s farm may produce much food, but injustice sweeps it all away."`,
      reference: "Proverbs 13:23",
    },
    {
      verse: `"Those who spare the rod of discipline hate their children. Those who love their children care enough to discipline them."`,
      reference: "Proverbs 13:24",
    },
    {
      verse: `"The godly eat to their hearts’ content, but the belly of the wicked goes hungry."`,
      reference: "Proverbs 13:25",
    },
    {
      verse: `"A wise woman builds her home, but a foolish woman tears it down with her own hands."`,
      reference: "Proverbs 14:1",
    },
    {
      verse: `"Those who follow the right path fear the Lord; those who take the wrong path despise him."`,
      reference: "Proverbs 14:2",
    },
    {
      verse: `"A fool’s proud talk becomes a rod that beats him, but the words of the wise keep them safe."`,
      reference: "Proverbs 14:3",
    },
    {
      verse: `"Without oxen a stable stays clean, but you need a strong ox for a large harvest."`,
      reference: "Proverbs 14:4",
    },
    {
      verse: `"An honest witness does not lie; a false witness breathes lies."`,
      reference: "Proverbs 14:5",
    },
    {
      verse: `"A mocker seeks wisdom and never finds it, but knowledge comes easily to those with understanding."`,
      reference: "Proverbs 14:6",
    },
    {
      verse: `"Stay away from fools, for you won’t find knowledge on their lips."`,
      reference: "Proverbs 14:7",
    },
    {
      verse: `"The prudent understand where they are going, but fools deceive themselves."`,
      reference: "Proverbs 14:8",
    },
    {
      verse: `"Fools make fun of guilt, but the godly acknowledge it and seek reconciliation."`,
      reference: "Proverbs 14:9",
    },
    {
      verse: `"Each heart knows its own bitterness, and no one else can fully share its joy."`,
      reference: "Proverbs 14:10",
    },
    {
      verse: `"The house of the wicked will be destroyed, but the tent of the godly will flourish."`,
      reference: "Proverbs 14:11",
    },
    {
      verse: `"There is a path before each person that seems right, but it ends in death."`,
      reference: "Proverbs 14:12",
    },
    {
      verse: `"Laughter can conceal a heavy heart, but when the laughter ends, the grief remains."`,
      reference: "Proverbs 14:13",
    },
    {
      verse: `"Backsliders get what they deserve; good people receive their reward."`,
      reference: "Proverbs 14:14",
    },
    {
      verse: `"Only simpletons believe everything they’re told! The prudent carefully consider their steps."`,
      reference: "Proverbs 14:15",
    },
    {
      verse: `"The wise are cautious and avoid danger; fools plunge ahead with reckless confidence."`,
      reference: "Proverbs 14:16",
    },
    {
      verse: `"Short-tempered people do foolish things, and schemers are hated."`,
      reference: "Proverbs 14:17",
    },
    {
      verse: `"Simpletons are clothed with foolishness, but the prudent are crowned with knowledge."`,
      reference: "Proverbs 14:18",
    },
    {
      verse: `"Evil people will bow before good people; the wicked will bow at the gates of the godly."`,
      reference: "Proverbs 14:19",
    },
    {
      verse: `"The poor are despised even by their neighbors, while the rich have many “friends.”"`,
      reference: "Proverbs 14:20",
    },
    {
      verse: `"It is a sin to belittle one’s neighbor; blessed are those who help the poor."`,
      reference: "Proverbs 14:21",
    },
    {
      verse: `"If you plan to do evil, you will be lost; if you plan to do good, you will receive unfailing love and faithfulness."`,
      reference: "Proverbs 14:22",
    },
    {
      verse: `"Work brings profit, but mere talk leads to poverty!"`,
      reference: "Proverbs 14:23",
    },
    {
      verse: `"Wealth is a crown for the wise; the effort of fools yields only foolishness."`,
      reference: "Proverbs 14:24",
    },
    {
      verse: `"A truthful witness saves lives, but a false witness is a traitor."`,
      reference: "Proverbs 14:25",
    },
    {
      verse: `"Those who fear the Lord are secure; he will be a refuge for their children."`,
      reference: "Proverbs 14:26",
    },
    {
      verse: `"Fear of the Lord is a life-giving fountain; it offers escape from the snares of death."`,
      reference: "Proverbs 14:27",
    },
    {
      verse: `"A growing population is a king’s glory; a prince without subjects has nothing."`,
      reference: "Proverbs 14:28",
    },
    {
      verse: `"People with understanding control their anger; a hot temper shows great foolishness."`,
      reference: "Proverbs 14:29",
    },
    {
      verse: `"A peaceful heart leads to a healthy body; jealousy is like cancer in the bones."`,
      reference: "Proverbs 14:30",
    },
    {
      verse: `"Those who oppress the poor insult their Maker, but helping the poor honors him."`,
      reference: "Proverbs 14:31",
    },
    {
      verse: `"The wicked are crushed by disaster, but the godly have a refuge when they die."`,
      reference: "Proverbs 14:32",
    },
    {
      verse: `"Wisdom is enshrined in an understanding heart; wisdom is not found among fools."`,
      reference: "Proverbs 14:33",
    },
    {
      verse: `"Godliness makes a nation great, but sin is a disgrace to any people."`,
      reference: "Proverbs 14:34",
    },
    {
      verse: `"A king rejoices in wise servants but is angry with those who disgrace him."`,
      reference: "Proverbs 14:35",
    },
    {
      verse: `"A gentle answer deflects anger, but harsh words make tempers flare."`,
      reference: "Proverbs 15:1",
    },
    {
      verse: `"The tongue of the wise makes knowledge appealing, but the mouth of a fool belches out foolishness."`,
      reference: "Proverbs 15:2",
    },
    {
      verse: `"The Lord is watching everywhere, keeping his eye on both the evil and the good."`,
      reference: "Proverbs 15:3",
    },
    {
      verse: `"Gentle words are a tree of life; a deceitful tongue crushes the spirit."`,
      reference: "Proverbs 15:4",
    },
    {
      verse: `"Only a fool despises a parent’s discipline; whoever learns from correction is wise."`,
      reference: "Proverbs 15:5",
    },
    {
      verse: `"There is treasure in the house of the godly, but the earnings of the wicked bring trouble."`,
      reference: "Proverbs 15:6",
    },
    {
      verse: `"The lips of the wise give good advice; the heart of a fool has none to give."`,
      reference: "Proverbs 15:7",
    },
    {
      verse: `"The Lord detests the sacrifice of the wicked, but he delights in the prayers of the upright."`,
      reference: "Proverbs 15:8",
    },
    {
      verse: `"The Lord detests the way of the wicked, but he loves those who pursue godliness."`,
      reference: "Proverbs 15:9",
    },
    {
      verse: `"Whoever abandons the right path will be severely disciplined; whoever hates correction will die."`,
      reference: "Proverbs 15:10",
    },
    {
      verse: `"Even Death and Destruction hold no secrets from the Lord. How much more does he know the human heart!"`,
      reference: "Proverbs 15:11",
    },
    {
      verse: `"Mockers hate to be corrected, so they stay away from the wise."`,
      reference: "Proverbs 15:12",
    },
    {
      verse: `"A glad heart makes a happy face; a broken heart crushes the spirit."`,
      reference: "Proverbs 15:13",
    },
    {
      verse: `"A wise person is hungry for knowledge, while the fool feeds on trash."`,
      reference: "Proverbs 15:14",
    },
    {
      verse: `"For the despondent, every day brings trouble; for the happy heart, life is a continual feast."`,
      reference: "Proverbs 15:15",
    },
    {
      verse: `"Better to have little, with fear for the Lord, than to have great treasure and inner turmoil."`,
      reference: "Proverbs 15:16",
    },
    {
      verse: `"A bowl of vegetables with someone you love is better than steak with someone you hate."`,
      reference: "Proverbs 15:17",
    },
    {
      verse: `"A hot-tempered person starts fights; a cool-tempered person stops them."`,
      reference: "Proverbs 15:18",
    },
    {
      verse: `"A lazy person’s way is blocked with briers, but the path of the upright is an open highway."`,
      reference: "Proverbs 15:19",
    },
    {
      verse: `"Sensible children bring joy to their father; foolish children despise their mother."`,
      reference: "Proverbs 15:20",
    },
    {
      verse: `"Foolishness brings joy to those with no sense; a sensible person stays on the right path."`,
      reference: "Proverbs 15:21",
    },
    {
      verse: `"Plans go wrong for lack of advice; many advisers bring success."`,
      reference: "Proverbs 15:22",
    },
    {
      verse: `"Everyone enjoys a fitting reply; it is wonderful to say the right thing at the right time!"`,
      reference: "Proverbs 15:23",
    },
    {
      verse: `"The path of life leads upward for the wise; they leave the grave behind."`,
      reference: "Proverbs 15:24",
    },
    {
      verse: `"The Lord tears down the house of the proud, but he protects the property of widows."`,
      reference: "Proverbs 15:25",
    },
    {
      verse: `"The Lord detests evil plans, but he delights in pure words."`,
      reference: "Proverbs 15:26",
    },
    {
      verse: `"Greed brings grief to the whole family, but those who hate bribes will live."`,
      reference: "Proverbs 15:27",
    },
    {
      verse: `"The heart of the godly thinks carefully before speaking; the mouth of the wicked overflows with evil words."`,
      reference: "Proverbs 15:28",
    },
    {
      verse: `"The Lord is far from the wicked, but he hears the prayers of the righteous."`,
      reference: "Proverbs 15:29",
    },
    {
      verse: `"A cheerful look brings joy to the heart; good news makes for good health."`,
      reference: "Proverbs 15:30",
    },
    {
      verse: `"If you listen to constructive criticism, you will be at home among the wise."`,
      reference: "Proverbs 15:31",
    },
    {
      verse: `"If you reject discipline, you only harm yourself; but if you listen to correction, you grow in understanding."`,
      reference: "Proverbs 15:32",
    },
    {
      verse: `"Fear of the Lord teaches wisdom; humility precedes honor."`,
      reference: "Proverbs 15:33",
    },
    {
      verse: `"We can make our own plans, but the Lord gives the right answer."`,
      reference: "Proverbs 16:1",
    },
    {
      verse: `"People may be pure in their own eyes, but the Lord examines their motives."`,
      reference: "Proverbs 16:2",
    },
    {
      verse: `"Commit your actions to the Lord, and your plans will succeed."`,
      reference: "Proverbs 16:3",
    },
    {
      verse: `"The Lord has made everything for his own purposes, even the wicked for a day of disaster."`,
      reference: "Proverbs 16:4",
    },
    {
      verse: `"The Lord detests the proud; they will surely be punished."`,
      reference: "Proverbs 16:5",
    },
    {
      verse: `"Unfailing love and faithfulness make atonement for sin. By fearing the Lord, people avoid evil."`,
      reference: "Proverbs 16:6",
    },
    {
      verse: `"When people’s lives please the Lord, even their enemies are at peace with them."`,
      reference: "Proverbs 16:7",
    },
    {
      verse: `"Better to have little, with godliness, than to be rich and dishonest."`,
      reference: "Proverbs 16:8",
    },
    {
      verse: `"We can make our plans, but the Lord determines our steps."`,
      reference: "Proverbs 16:9",
    },
    {
      verse: `"The king speaks with divine wisdom; he must never judge unfairly."`,
      reference: "Proverbs 16:10",
    },
    {
      verse: `"The Lord demands accurate scales and balances; he sets the standards for fairness."`,
      reference: "Proverbs 16:11",
    },
    {
      verse: `"A king detests wrongdoing, for his rule is built on justice."`,
      reference: "Proverbs 16:12",
    },
    {
      verse: `"The king is pleased with words from righteous lips; he loves those who speak honestly."`,
      reference: "Proverbs 16:13",
    },
    {
      verse: `"The anger of the king is a deadly threat; the wise will try to appease it."`,
      reference: "Proverbs 16:14",
    },
    {
      verse: `"When the king smiles, there is life; his favor refreshes like a spring rain."`,
      reference: "Proverbs 16:15",
    },
    {
      verse: `"How much better to get wisdom than gold, and good judgment than silver!"`,
      reference: "Proverbs 16:16",
    },
    {
      verse: `"The path of the virtuous leads away from evil; whoever follows that path is safe."`,
      reference: "Proverbs 16:17",
    },
    {
      verse: `"Pride goes before destruction, and haughtiness before a fall."`,
      reference: "Proverbs 16:18",
    },
    {
      verse: `"Better to live humbly with the poor than to share plunder with the proud."`,
      reference: "Proverbs 16:19",
    },
    {
      verse: `"Those who listen to instruction will prosper; those who trust the Lord will be joyful."`,
      reference: "Proverbs 16:20",
    },
    {
      verse: `"The wise are known for their understanding, and pleasant words are persuasive."`,
      reference: "Proverbs 16:21",
    },
    {
      verse: `"Discretion is a life-giving fountain to those who possess it, but discipline is wasted on fools."`,
      reference: "Proverbs 16:22",
    },
    {
      verse: `"From a wise mind comes wise speech; the words of the wise are persuasive."`,
      reference: "Proverbs 16:23",
    },
    {
      verse: `"Kind words are like honey—sweet to the soul and healthy for the body."`,
      reference: "Proverbs 16:24",
    },
    {
      verse: `"There is a path before each person that seems right, but it ends in death."`,
      reference: "Proverbs 16:25",
    },
    {
      verse: `"It is good for workers to have an appetite; an empty stomach drives them on."`,
      reference: "Proverbs 16:26",
    },
    {
      verse: `"Scoundrels create trouble; their words are a destructive blaze."`,
      reference: "Proverbs 16:27",
    },
    {
      verse: `"A troublemaker plants seeds of strife; gossip separates the best of friends."`,
      reference: "Proverbs 16:28",
    },
    {
      verse: `"Violent people mislead their companions, leading them down a harmful path."`,
      reference: "Proverbs 16:29",
    },
    {
      verse: `"With narrowed eyes, people plot evil; with a smirk, they plan their mischief."`,
      reference: "Proverbs 16:30",
    },
    {
      verse: `"Gray hair is a crown of glory; it is gained by living a godly life."`,
      reference: "Proverbs 16:31",
    },
    {
      verse: `"Better to be patient than powerful; better to have self-control than to conquer a city."`,
      reference: "Proverbs 16:32",
    },
    {
      verse: `"We may throw the dice, but the Lord determines how they fall."`,
      reference: "Proverbs 16:33",
    },
    {
      verse: `"Better a dry crust eaten in peace than a house filled with feasting—and conflict."`,
      reference: "Proverbs 17:1",
    },
    {
      verse: `"A wise servant will rule over the master’s disgraceful son and will share the inheritance of the master’s children."`,
      reference: "Proverbs 17:2",
    },
    {
      verse: `"Fire tests the purity of silver and gold, but the Lord tests the heart."`,
      reference: "Proverbs 17:3",
    },
    {
      verse: `"Wrongdoers eagerly listen to gossip; liars pay close attention to slander."`,
      reference: "Proverbs 17:4",
    },
    {
      verse: `"Those who mock the poor insult their Maker; those who rejoice at the misfortune of others will be punished."`,
      reference: "Proverbs 17:5",
    },
    {
      verse: `"Grandchildren are the crowning glory of the aged; parents are the pride of their children."`,
      reference: "Proverbs 17:6",
    },
    {
      verse: `"Eloquent words are not fitting for a fool; even less are lies fitting for a ruler."`,
      reference: "Proverbs 17:7",
    },
    {
      verse: `"A bribe is like a lucky charm; whoever gives one will prosper!"`,
      reference: "Proverbs 17:8",
    },
    {
      verse: `"Love prospers when a fault is forgiven, but dwelling on it separates close friends."`,
      reference: "Proverbs 17:9",
    },
    {
      verse: `"A single rebuke does more for a person of understanding than a hundred lashes on the back of a fool."`,
      reference: "Proverbs 17:10",
    },
    {
      verse: `"Evil people are eager for rebellion, but they will be severely punished."`,
      reference: "Proverbs 17:11",
    },
    {
      verse: `"It is safer to meet a bear robbed of her cubs than to confront a fool caught in foolishness."`,
      reference: "Proverbs 17:12",
    },
    {
      verse: `"If you repay good with evil, evil will never leave your house."`,
      reference: "Proverbs 17:13",
    },
    {
      verse: `"Starting a quarrel is like opening a floodgate, so stop before a dispute breaks out."`,
      reference: "Proverbs 17:14",
    },
    {
      verse: `"Acquitting the guilty and condemning the innocent—both are detestable to the Lord."`,
      reference: "Proverbs 17:15",
    },
    {
      verse: `"It is senseless to pay to educate a fool, since he has no heart for learning."`,
      reference: "Proverbs 17:16",
    },
    {
      verse: `"A friend is always loyal, and a brother is born to help in time of need."`,
      reference: "Proverbs 17:17",
    },
    {
      verse: `"It’s poor judgment to guarantee another person’s debt or put up security for a friend."`,
      reference: "Proverbs 17:18",
    },
    {
      verse: `"Anyone who loves to quarrel loves sin; anyone who trusts in high walls invites disaster."`,
      reference: "Proverbs 17:19",
    },
    {
      verse: `"The crooked heart will not prosper; the lying tongue tumbles into trouble."`,
      reference: "Proverbs 17:20",
    },
    {
      verse: `"It is painful to be the parent of a fool; there is no joy for the father of a rebel."`,
      reference: "Proverbs 17:21",
    },
    {
      verse: `"A cheerful heart is good medicine, but a broken spirit saps a person’s strength."`,
      reference: "Proverbs 17:22",
    },
    {
      verse: `"The wicked take secret bribes to pervert the course of justice."`,
      reference: "Proverbs 17:23",
    },
    {
      verse: `"Sensible people keep their eyes glued on wisdom, but a fool’s eyes wander to the ends of the earth."`,
      reference: "Proverbs 17:24",
    },
    {
      verse: `"Foolish children bring grief to their father and bitterness to the one who gave them birth."`,
      reference: "Proverbs 17:25",
    },
    {
      verse: `"It is wrong to punish the godly for being good or to flog leaders for being honest."`,
      reference: "Proverbs 17:26",
    },
    {
      verse: `"A truly wise person uses few words; a person with understanding is even-tempered."`,
      reference: "Proverbs 17:27",
    },
    {
      verse: `"Even fools are thought wise when they keep silent; with their mouths shut, they seem intelligent."`,
      reference: "Proverbs 17:28",
    },
    {
      verse: `"Unfriendly people care only about themselves; they lash out at common sense."`,
      reference: "Proverbs 18:1",
    },
    {
      verse: `"Fools have no interest in understanding; they only want to air their own opinions."`,
      reference: "Proverbs 18:2",
    },
    {
      verse: `"Doing wrong leads to disgrace, and scandalous behavior brings contempt."`,
      reference: "Proverbs 18:3",
    },
    {
      verse: `"Wise words are like deep waters; wisdom flows from the wise like a bubbling brook."`,
      reference: "Proverbs 18:4",
    },
    {
      verse: `"It is not right to acquit the guilty or deny justice to the innocent."`,
      reference: "Proverbs 18:5",
    },
    {
      verse: `"Fools’ words get them into constant quarrels; they are asking for a beating."`,
      reference: "Proverbs 18:6",
    },
    {
      verse: `"The mouths of fools are their ruin; they trap themselves with their lips."`,
      reference: "Proverbs 18:7",
    },
    {
      verse: `"Rumors are dainty morsels that sink deep into one’s heart."`,
      reference: "Proverbs 18:8",
    },
    {
      verse: `"A lazy person is as bad as someone who destroys things."`,
      reference: "Proverbs 18:9",
    },
    {
      verse: `"The name of the Lord is a strong fortress; the godly run to him and are safe."`,
      reference: "Proverbs 18:10",
    },
    {
      verse: `"The rich think of their wealth as a strong defense; they imagine it to be a high wall of safety."`,
      reference: "Proverbs 18:11",
    },
    {
      verse: `"Haughtiness goes before destruction; humility precedes honor."`,
      reference: "Proverbs 18:12",
    },
    {
      verse: `"Spouting off before listening to the facts is both shameful and foolish."`,
      reference: "Proverbs 18:13",
    },
    {
      verse: `"The human spirit can endure a sick body, but who can bear a crushed spirit?"`,
      reference: "Proverbs 18:14",
    },
    {
      verse: `"Intelligent people are always ready to learn. Their ears are open for knowledge."`,
      reference: "Proverbs 18:15",
    },
    {
      verse: `"Giving a gift can open doors; it gives access to important people!"`,
      reference: "Proverbs 18:16",
    },
    {
      verse: `"The first to speak in court sounds right—until the cross-examination begins."`,
      reference: "Proverbs 18:17",
    },
    {
      verse: `"Flipping a coin can end arguments; it settles disputes between powerful opponents."`,
      reference: "Proverbs 18:18",
    },
    {
      verse: `"An offended friend is harder to win back than a fortified city. Arguments separate friends like a gate locked with bars."`,
      reference: "Proverbs 18:19",
    },
    {
      verse: `"Wise words satisfy like a good meal; the right words bring satisfaction."`,
      reference: "Proverbs 18:20",
    },
    {
      verse: `"The tongue can bring death or life; those who love to talk will reap the consequences."`,
      reference: "Proverbs 18:21",
    },
    {
      verse: `"The man who finds a wife finds a treasure, and he receives favor from the Lord."`,
      reference: "Proverbs 18:22",
    },
    {
      verse: `"The poor plead for mercy; the rich answer with insults."`,
      reference: "Proverbs 18:23",
    },
    {
      verse: `"There are “friends” who destroy each other, but a real friend sticks closer than a brother."`,
      reference: "Proverbs 18:24",
    },
    {
      verse: `"Better to be poor and honest than to be dishonest and a fool."`,
      reference: "Proverbs 19:1",
    },
    {
      verse: `"Enthusiasm without knowledge is no good; haste makes mistakes."`,
      reference: "Proverbs 19:2",
    },
    {
      verse: `"People ruin their lives by their own foolishness and then are angry at the Lord."`,
      reference: "Proverbs 19:3",
    },
    {
      verse: `"Wealth makes many “friends”; poverty drives them all away."`,
      reference: "Proverbs 19:4",
    },
    {
      verse: `"A false witness will not go unpunished, nor will a liar escape."`,
      reference: "Proverbs 19:5",
    },
    {
      verse: `"Many seek favors from a ruler; everyone is the friend of a person who gives gifts!"`,
      reference: "Proverbs 19:6",
    },
    {
      verse: `"The relatives of the poor despise them; how much more will their friends avoid them! Though the poor plead with them, their friends are gone."`,
      reference: "Proverbs 19:7",
    },
    {
      verse: `"To acquire wisdom is to love yourself; people who cherish understanding will prosper."`,
      reference: "Proverbs 19:8",
    },
    {
      verse: `"A false witness will not go unpunished, and a liar will be destroyed."`,
      reference: "Proverbs 19:9",
    },
    {
      verse: `"It isn’t right for a fool to live in luxury or for a slave to rule over princes!"`,
      reference: "Proverbs 19:10",
    },
    {
      verse: `"Sensible people control their temper; they earn respect by overlooking wrongs."`,
      reference: "Proverbs 19:11",
    },
    {
      verse: `"The king’s anger is like a lion’s roar, but his favor is like dew on the grass."`,
      reference: "Proverbs 19:12",
    },
    {
      verse: `"A foolish child is a calamity to a father; a quarrelsome wife is as annoying as constant dripping."`,
      reference: "Proverbs 19:13",
    },
    {
      verse: `"Fathers can give their sons an inheritance of houses and wealth, but only the Lord can give an understanding wife."`,
      reference: "Proverbs 19:14",
    },
    {
      verse: `"Lazy people sleep soundly, but idleness leaves them hungry."`,
      reference: "Proverbs 19:15",
    },
    {
      verse: `"Keep the commandments and keep your life; despising them leads to death."`,
      reference: "Proverbs 19:16",
    },
    {
      verse: `"If you help the poor, you are lending to the Lord—and he will repay you!"`,
      reference: "Proverbs 19:17",
    },
    {
      verse: `"Discipline your children while there is hope. Otherwise you will ruin their lives."`,
      reference: "Proverbs 19:18",
    },
    {
      verse: `"Hot-tempered people must pay the penalty. If you rescue them once, you will have to do it again."`,
      reference: "Proverbs 19:19",
    },
    {
      verse: `"Get all the advice and instruction you can, so you will be wise the rest of your life."`,
      reference: "Proverbs 19:20",
    },
    {
      verse: `"You can make many plans, but the Lord’s purpose will prevail."`,
      reference: "Proverbs 19:21",
    },
    {
      verse: `"Loyalty makes a person attractive. It is better to be poor than dishonest."`,
      reference: "Proverbs 19:22",
    },
    {
      verse: `"Fear of the Lord leads to life, bringing security and protection from harm."`,
      reference: "Proverbs 19:23",
    },
    {
      verse: `"Lazy people take food in their hand but don’t even lift it to their mouth."`,
      reference: "Proverbs 19:24",
    },
    {
      verse: `"If you punish a mocker, the simpleminded will learn a lesson; if you correct the wise, they will be all the wiser."`,
      reference: "Proverbs 19:25",
    },
    {
      verse: `"Children who mistreat their father or chase away their mother are an embarrassment and a public disgrace."`,
      reference: "Proverbs 19:26",
    },
    {
      verse: `"If you stop listening to instruction, my child, you will turn your back on knowledge."`,
      reference: "Proverbs 19:27",
    },
    {
      verse: `"A corrupt witness makes a mockery of justice; the mouth of the wicked gulps down evil."`,
      reference: "Proverbs 19:28",
    },
    {
      verse: `"Punishment is made for mockers, and the backs of fools are made to be beaten."`,
      reference: "Proverbs 19:29",
    },
    {
      verse: `"Wine produces mockers; alcohol leads to brawls. Those led astray by drink cannot be wise."`,
      reference: "Proverbs 20:1",
    },
    {
      verse: `"The king’s fury is like a lion’s roar; to rouse his anger is to risk your life."`,
      reference: "Proverbs 20:2",
    },
    {
      verse: `"Avoiding a fight is a mark of honor; only fools insist on quarreling."`,
      reference: "Proverbs 20:3",
    },
    {
      verse: `"Those too lazy to plow in the right season will have no food at the harvest."`,
      reference: "Proverbs 20:4",
    },
    {
      verse: `"Though good advice lies deep within the heart, a person with understanding will draw it out."`,
      reference: "Proverbs 20:5",
    },
    {
      verse: `"Many will say they are loyal friends, but who can find one who is truly reliable?"`,
      reference: "Proverbs 20:6",
    },
    {
      verse: `"The godly walk with integrity; blessed are their children who follow them."`,
      reference: "Proverbs 20:7",
    },
    {
      verse: `"When a king sits in judgment, he weighs all the evidence, distinguishing the bad from the good."`,
      reference: "Proverbs 20:8",
    },
    {
      verse: `"Who can say, “I have cleansed my heart; I am pure and free from sin”?"`,
      reference: "Proverbs 20:9",
    },
    {
      verse: `"False weights and unequal measures—the Lord detests double standards of every kind."`,
      reference: "Proverbs 20:10",
    },
    {
      verse: `"Even children are known by the way they act, whether their conduct is pure, and whether it is right."`,
      reference: "Proverbs 20:11",
    },
    {
      verse: `"Ears to hear and eyes to see—both are gifts from the Lord."`,
      reference: "Proverbs 20:12",
    },
    {
      verse: `"If you love sleep, you will end in poverty. Keep your eyes open, and there will be plenty to eat!"`,
      reference: "Proverbs 20:13",
    },
    {
      verse: `"The buyer haggles over the price, saying, “It’s worthless,” then brags about getting a bargain!"`,
      reference: "Proverbs 20:14",
    },
    {
      verse: `"Wise words are more valuable than much gold and many rubies."`,
      reference: "Proverbs 20:15",
    },
    {
      verse: `"Get security from someone who guarantees a stranger’s debt. Get a deposit if he does it for foreigners."`,
      reference: "Proverbs 20:16",
    },
    {
      verse: `"Stolen bread tastes sweet, but it turns to gravel in the mouth."`,
      reference: "Proverbs 20:17",
    },
    {
      verse: `"Plans succeed through good counsel; don’t go to war without wise advice."`,
      reference: "Proverbs 20:18",
    },
    {
      verse: `"A gossip goes around telling secrets, so don’t hang around with chatterers."`,
      reference: "Proverbs 20:19",
    },
    {
      verse: `"If you insult your father or mother, your light will be snuffed out in total darkness."`,
      reference: "Proverbs 20:20",
    },
    {
      verse: `"An inheritance obtained too early in life is not a blessing in the end."`,
      reference: "Proverbs 20:21",
    },
    {
      verse: `"Don’t say, “I will get even for this wrong.” Wait for the Lord to handle the matter."`,
      reference: "Proverbs 20:22",
    },
    {
      verse: `"The Lord detests double standards; he is not pleased by dishonest scales."`,
      reference: "Proverbs 20:23",
    },
    {
      verse: `"The Lord directs our steps, so why try to understand everything along the way?"`,
      reference: "Proverbs 20:24",
    },
    {
      verse: `"Don’t trap yourself by making a rash promise to God and only later counting the cost."`,
      reference: "Proverbs 20:25",
    },
    {
      verse: `"A wise king scatters the wicked like wheat, then runs his threshing wheel over them."`,
      reference: "Proverbs 20:26",
    },
    {
      verse: `"The Lord’s light penetrates the human spirit, exposing every hidden motive."`,
      reference: "Proverbs 20:27",
    },
    {
      verse: `"Unfailing love and faithfulness protect the king; his throne is made secure through love."`,
      reference: "Proverbs 20:28",
    },
    {
      verse: `"The glory of the young is their strength; the gray hair of experience is the splendor of the old."`,
      reference: "Proverbs 20:29",
    },
    {
      verse: `"Physical punishment cleanses away evil; such discipline purifies the heart."`,
      reference: "Proverbs 20:30",
    },
    {
      verse: `"The king’s heart is like a stream of water directed by the Lord; he guides it wherever he pleases."`,
      reference: "Proverbs 21:1",
    },
    {
      verse: `"People may be right in their own eyes, but the Lord examines their heart."`,
      reference: "Proverbs 21:2",
    },
    {
      verse: `"The Lord is more pleased when we do what is right and just than when we offer him sacrifices."`,
      reference: "Proverbs 21:3",
    },
    {
      verse: `"Haughty eyes, a proud heart, and evil actions are all sin."`,
      reference: "Proverbs 21:4",
    },
    {
      verse: `"Good planning and hard work lead to prosperity, but hasty shortcuts lead to poverty."`,
      reference: "Proverbs 21:5",
    },
    {
      verse: `"Wealth created by a lying tongue is a vanishing mist and a deadly trap."`,
      reference: "Proverbs 21:6",
    },
    {
      verse: `"The violence of the wicked sweeps them away, because they refuse to do what is just."`,
      reference: "Proverbs 21:7",
    },
    {
      verse: `"The guilty walk a crooked path; the innocent travel a straight road."`,
      reference: "Proverbs 21:8",
    },
    {
      verse: `"It’s better to live alone in the corner of an attic than with a quarrelsome wife in a lovely home."`,
      reference: "Proverbs 21:9",
    },
    {
      verse: `"Evil people desire evil; their neighbors get no mercy from them."`,
      reference: "Proverbs 21:10",
    },
    {
      verse: `"If you punish a mocker, the simpleminded become wise; if you instruct the wise, they will be all the wiser."`,
      reference: "Proverbs 21:11",
    },
    {
      verse: `"The Righteous One knows what is going on in the homes of the wicked; he will bring disaster on them."`,
      reference: "Proverbs 21:12",
    },
    {
      verse: `"Those who shut their ears to the cries of the poor will be ignored in their own time of need."`,
      reference: "Proverbs 21:13",
    },
    {
      verse: `"A secret gift calms anger; a bribe under the table pacifies fury."`,
      reference: "Proverbs 21:14",
    },
    {
      verse: `"Justice is a joy to the godly, but it terrifies evildoers."`,
      reference: "Proverbs 21:15",
    },
    {
      verse: `"The person who strays from common sense will end up in the company of the dead."`,
      reference: "Proverbs 21:16",
    },
    {
      verse: `"Those who love pleasure become poor; those who love wine and luxury will never be rich."`,
      reference: "Proverbs 21:17",
    },
    {
      verse: `"The wicked are punished in place of the godly, and traitors in place of the honest."`,
      reference: "Proverbs 21:18",
    },
    {
      verse: `"It’s better to live alone in the desert than with a quarrelsome, complaining wife."`,
      reference: "Proverbs 21:19",
    },
    {
      verse: `"The wise have wealth and luxury, but fools spend whatever they get."`,
      reference: "Proverbs 21:20",
    },
    {
      verse: `"Whoever pursues righteousness and unfailing love will find life, righteousness, and honor."`,
      reference: "Proverbs 21:21",
    },
    {
      verse: `"The wise conquer the city of the strong and level the fortress in which they trust."`,
      reference: "Proverbs 21:22",
    },
    {
      verse: `"Watch your tongue and keep your mouth shut, and you will stay out of trouble."`,
      reference: "Proverbs 21:23",
    },
    {
      verse: `"Mockers are proud and haughty; they act with boundless arrogance."`,
      reference: "Proverbs 21:24",
    },
    {
      verse: `"Despite their desires, the lazy will come to ruin, for their hands refuse to work."`,
      reference: "Proverbs 21:25",
    },
    {
      verse: `"Some people are always greedy for more, but the godly love to give!"`,
      reference: "Proverbs 21:26",
    },
    {
      verse: `"The sacrifice of an evil person is detestable, especially when it is offered with wrong motives."`,
      reference: "Proverbs 21:27",
    },
    {
      verse: `"A false witness will be cut off, but a credible witness will be allowed to speak."`,
      reference: "Proverbs 21:28",
    },
    {
      verse: `"The wicked bluff their way through, but the virtuous think before they act."`,
      reference: "Proverbs 21:29",
    },
    {
      verse: `"No human wisdom or understanding or plan can stand against the Lord."`,
      reference: "Proverbs 21:30",
    },
    {
      verse: `"The horse is prepared for the day of battle, but the victory belongs to the Lord."`,
      reference: "Proverbs 21:31",
    },
    {
      verse: `"Choose a good reputation over great riches; being held in high esteem is better than silver or gold."`,
      reference: "Proverbs 22:1",
    },
    {
      verse: `"The rich and poor have this in common: The Lord made them both."`,
      reference: "Proverbs 22:2",
    },
    {
      verse: `"A prudent person foresees danger and takes precautions. The simpleton goes blindly on and suffers the consequences."`,
      reference: "Proverbs 22:3",
    },
    {
      verse: `"True humility and fear of the Lord lead to riches, honor, and long life."`,
      reference: "Proverbs 22:4",
    },
    {
      verse: `"Corrupt people walk a thorny, treacherous road; whoever values life will avoid it."`,
      reference: "Proverbs 22:5",
    },
    {
      verse: `"Direct your children onto the right path, and when they are older, they will not leave it."`,
      reference: "Proverbs 22:6",
    },
    {
      verse: `"Just as the rich rule the poor, so the borrower is servant to the lender."`,
      reference: "Proverbs 22:7",
    },
    {
      verse: `"Those who plant injustice will harvest disaster, and their reign of terror will come to an end."`,
      reference: "Proverbs 22:8",
    },
    {
      verse: `"Blessed are those who are generous, because they feed the poor."`,
      reference: "Proverbs 22:9",
    },
    {
      verse: `"Throw out the mocker, and fighting goes, too. Quarrels and insults will disappear."`,
      reference: "Proverbs 22:10",
    },
    {
      verse: `"Whoever loves a pure heart and gracious speech will have the king as a friend."`,
      reference: "Proverbs 22:11",
    },
    {
      verse: `"The Lord preserves those with knowledge, but he ruins the plans of the treacherous."`,
      reference: "Proverbs 22:12",
    },
    {
      verse: `"The lazy person claims, “There’s a lion out there! If I go outside, I might be killed!”"`,
      reference: "Proverbs 22:13",
    },
    {
      verse: `"The mouth of an immoral woman is a dangerous trap; those who make the Lord angry will fall into it."`,
      reference: "Proverbs 22:14",
    },
    {
      verse: `"A youngster’s heart is filled with foolishness, but physical discipline will drive it far away."`,
      reference: "Proverbs 22:15",
    },
    {
      verse: `"A person who gets ahead by oppressing the poor or by showering gifts on the rich will end in poverty."`,
      reference: "Proverbs 22:16",
    },
    {
      verse: `"Listen to the words of the wise; apply your heart to my instruction."`,
      reference: "Proverbs 22:17",
    },
    {
      verse: `"For it is good to keep these sayings in your heart and always ready on your lips."`,
      reference: "Proverbs 22:18",
    },
    {
      verse: `"I am teaching you today—yes, you—so you will trust in the Lord."`,
      reference: "Proverbs 22:19",
    },
    {
      verse: `"I have written thirty sayings for you, filled with advice and knowledge."`,
      reference: "Proverbs 22:20",
    },
    {
      verse: `"In this way, you may know the truth and take an accurate report to those who sent you."`,
      reference: "Proverbs 22:21",
    },
    {
      verse: `"Don’t rob the poor just because you can, or exploit the needy in court."`,
      reference: "Proverbs 22:22",
    },
    {
      verse: `"For the Lord is their defender. He will ruin anyone who ruins them."`,
      reference: "Proverbs 22:23",
    },
    {
      verse: `"Don’t befriend angry people or associate with hot-tempered people,"`,
      reference: "Proverbs 22:24",
    },
    {
      verse: `"or you will learn to be like them and endanger your soul."`,
      reference: "Proverbs 22:25",
    },
    {
      verse: `"Don’t agree to guarantee another person’s debt or put up security for someone else."`,
      reference: "Proverbs 22:26",
    },
    {
      verse: `"If you can’t pay it, even your bed will be snatched from under you."`,
      reference: "Proverbs 22:27",
    },
    {
      verse: `"Don’t cheat your neighbor by moving the ancient boundary markers set up by previous generations."`,
      reference: "Proverbs 22:28",
    },
    {
      verse: `"Do you see any truly competent workers? They will serve kings rather than working for ordinary people."`,
      reference: "Proverbs 22:29",
    },
    {
      verse: `"While dining with a ruler, pay attention to what is put before you."`,
      reference: "Proverbs 23:1",
    },
    {
      verse: `"If you are a big eater, put a knife to your throat;"`,
      reference: "Proverbs 23:2",
    },
    {
      verse: `"don’t desire all the delicacies, for he might be trying to trick you."`,
      reference: "Proverbs 23:3",
    },
    {
      verse: `"Don’t wear yourself out trying to get rich. Be wise enough to know when to quit."`,
      reference: "Proverbs 23:4",
    },
    {
      verse: `"In the blink of an eye wealth disappears, for it will sprout wings and fly away like an eagle."`,
      reference: "Proverbs 23:5",
    },
    {
      verse: `"Don’t eat with people who are stingy; don’t desire their delicacies."`,
      reference: "Proverbs 23:6",
    },
    {
      verse: `"They are always thinking about how much it costs. “Eat and drink,” they say, but they don’t mean it."`,
      reference: "Proverbs 23:7",
    },
    {
      verse: `"You will throw up what little you’ve eaten, and your compliments will be wasted."`,
      reference: "Proverbs 23:8",
    },
    {
      verse: `"Don’t waste your breath on fools, for they will despise the wisest advice."`,
      reference: "Proverbs 23:9",
    },
    {
      verse: `"Don’t cheat your neighbor by moving the ancient boundary markers; don’t take the land of defenseless orphans."`,
      reference: "Proverbs 23:10",
    },
    {
      verse: `"For their Redeemer is strong; he himself will bring their charges against you."`,
      reference: "Proverbs 23:11",
    },
    {
      verse: `"Commit yourself to instruction; listen carefully to words of knowledge."`,
      reference: "Proverbs 23:12",
    },
    {
      verse: `"Don’t fail to discipline your children. The rod of punishment won’t kill them."`,
      reference: "Proverbs 23:13",
    },
    {
      verse: `"Physical discipline may well save them from death."`,
      reference: "Proverbs 23:14",
    },
    {
      verse: `"My child, if your heart is wise, my own heart will rejoice!"`,
      reference: "Proverbs 23:15",
    },
    {
      verse: `"Everything in me will celebrate when you speak what is right."`,
      reference: "Proverbs 23:16",
    },
    {
      verse: `"Don’t envy sinners, but always continue to fear the Lord."`,
      reference: "Proverbs 23:17",
    },
    {
      verse: `"You will be rewarded for this; your hope will not be disappointed."`,
      reference: "Proverbs 23:18",
    },
    {
      verse: `"My child, listen and be wise: Keep your heart on the right course."`,
      reference: "Proverbs 23:19",
    },
    {
      verse: `"Do not carouse with drunkards or feast with gluttons,"`,
      reference: "Proverbs 23:20",
    },
    {
      verse: `"for they are on their way to poverty, and too much sleep clothes them in rags."`,
      reference: "Proverbs 23:21",
    },
    {
      verse: `"Listen to your father, who gave you life, and don’t despise your mother when she is old."`,
      reference: "Proverbs 23:22",
    },
    {
      verse: `"Get the truth and never sell it; also get wisdom, discipline, and good judgment."`,
      reference: "Proverbs 23:23",
    },
    {
      verse: `"The father of godly children has cause for joy. What a pleasure to have children who are wise."`,
      reference: "Proverbs 23:24",
    },
    {
      verse: `"So give your father and mother joy! May she who gave you birth be happy."`,
      reference: "Proverbs 23:25",
    },
    {
      verse: `"O my son, give me your heart. May your eyes take delight in following my ways."`,
      reference: "Proverbs 23:26",
    },
    {
      verse: `"A prostitute is a dangerous trap; a promiscuous woman is as dangerous as falling into a narrow well."`,
      reference: "Proverbs 23:27",
    },
    {
      verse: `"She hides and waits like a robber, eager to make more men unfaithful."`,
      reference: "Proverbs 23:28",
    },
    {
      verse: `"Who has anguish? Who has sorrow? Who is always fighting? Who is always complaining? Who has unnecessary bruises? Who has bloodshot eyes?"`,
      reference: "Proverbs 23:29",
    },
    {
      verse: `"It is the one who spends long hours in the taverns, trying out new drinks."`,
      reference: "Proverbs 23:30",
    },
    {
      verse: `"Don’t gaze at the wine, seeing how red it is, how it sparkles in the cup, how smoothly it goes down."`,
      reference: "Proverbs 23:31",
    },
    {
      verse: `"For in the end it bites like a poisonous snake; it stings like a viper."`,
      reference: "Proverbs 23:32",
    },
    {
      verse: `"You will see hallucinations, and you will say crazy things."`,
      reference: "Proverbs 23:33",
    },
    {
      verse: `"You will stagger like a sailor tossed at sea, clinging to a swaying mast."`,
      reference: "Proverbs 23:34",
    },
    {
      verse: `"And you will say, “They hit me, but I didn’t feel it. I didn’t even know it when they beat me up. When will I wake up so I can look for another drink?”"`,
      reference: "Proverbs 23:35",
    },
    {
      verse: `"Don’t envy evil people or desire their company."`,
      reference: "Proverbs 24:1",
    },
    {
      verse: `"For their hearts plot violence, and their words always stir up trouble."`,
      reference: "Proverbs 24:2",
    },
    {
      verse: `"A house is built by wisdom and becomes strong through good sense."`,
      reference: "Proverbs 24:3",
    },
    {
      verse: `"Through knowledge its rooms are filled with all sorts of precious riches and valuables."`,
      reference: "Proverbs 24:4",
    },
    {
      verse: `"The wise are mightier than the strong, and those with knowledge grow stronger and stronger."`,
      reference: "Proverbs 24:5",
    },
    {
      verse: `"So don’t go to war without wise guidance; victory depends on having many advisers."`,
      reference: "Proverbs 24:6",
    },
    {
      verse: `"Wisdom is too lofty for fools. Among leaders at the city gate, they have nothing to say."`,
      reference: "Proverbs 24:7",
    },
    {
      verse: `"A person who plans evil will get a reputation as a troublemaker."`,
      reference: "Proverbs 24:8",
    },
    {
      verse: `"The schemes of a fool are sinful; everyone detests a mocker."`,
      reference: "Proverbs 24:9",
    },
    {
      verse: `"If you fail under pressure, your strength is too small."`,
      reference: "Proverbs 24:10",
    },
    {
      verse: `"Rescue those who are unjustly sentenced to die; save them as they stagger to their death."`,
      reference: "Proverbs 24:11",
    },
    {
      verse: `"Don’t excuse yourself by saying, “Look, we didn’t know.” For God understands all hearts, and he sees you. He who guards your soul knows you knew. He will repay all people as their actions deserve."`,
      reference: "Proverbs 24:12",
    },
    {
      verse: `"My child, eat honey, for it is good, and the honeycomb is sweet to the taste."`,
      reference: "Proverbs 24:13",
    },
    {
      verse: `"In the same way, wisdom is sweet to your soul. If you find it, you will have a bright future, and your hopes will not be cut short."`,
      reference: "Proverbs 24:14",
    },
    {
      verse: `"Don’t wait in ambush at the home of the godly, and don’t raid the house where the godly live."`,
      reference: "Proverbs 24:15",
    },
    {
      verse: `"The godly may trip seven times, but they will get up again. But one disaster is enough to overthrow the wicked."`,
      reference: "Proverbs 24:16",
    },
    {
      verse: `"Don’t rejoice when your enemies fall; don’t be happy when they stumble."`,
      reference: "Proverbs 24:17",
    },
    {
      verse: `"For the Lord will be displeased with you and will turn his anger away from them."`,
      reference: "Proverbs 24:18",
    },
    {
      verse: `"Don’t fret because of evildoers; don’t envy the wicked."`,
      reference: "Proverbs 24:19",
    },
    {
      verse: `"For evil people have no future; the light of the wicked will be snuffed out."`,
      reference: "Proverbs 24:20",
    },
    {
      verse: `"My child, fear the Lord and the king. Don’t associate with rebels,"`,
      reference: "Proverbs 24:21",
    },
    {
      verse: `"for disaster will hit them suddenly. Who knows what punishment will come from the Lord and the king?"`,
      reference: "Proverbs 24:22",
    },
    {
      verse: `"Here are some further sayings of the wise: It is wrong to show favoritism when passing judgment."`,
      reference: "Proverbs 24:23",
    },
    {
      verse: `"A judge who says to the wicked, “You are innocent,” will be cursed by many people and denounced by the nations."`,
      reference: "Proverbs 24:24",
    },
    {
      verse: `"But it will go well for those who convict the guilty; rich blessings will be showered on them."`,
      reference: "Proverbs 24:25",
    },
    {
      verse: `"An honest answer is like a kiss of friendship."`,
      reference: "Proverbs 24:26",
    },
    {
      verse: `"Do your planning and prepare your fields before building your house."`,
      reference: "Proverbs 24:27",
    },
    {
      verse: `"Don’t testify against your neighbors without cause; don’t lie about them."`,
      reference: "Proverbs 24:28",
    },
    {
      verse: `"And don’t say, “Now I can pay them back for what they’ve done to me! I’ll get even with them!”"`,
      reference: "Proverbs 24:29",
    },
    {
      verse: `"I walked by the field of a lazy person, the vineyard of one with no common sense."`,
      reference: "Proverbs 24:30",
    },
    {
      verse: `"I saw that it was overgrown with nettles. It was covered with weeds, and its walls were broken down."`,
      reference: "Proverbs 24:31",
    },
    {
      verse: `"Then, as I looked and thought about it, I learned this lesson:"`,
      reference: "Proverbs 24:32",
    },
    {
      verse: `"A little extra sleep, a little more slumber, a little folding of the hands to rest—"`,
      reference: "Proverbs 24:33",
    },
    {
      verse: `"then poverty will pounce on you like a bandit; scarcity will attack you like an armed robber."`,
      reference: "Proverbs 24:34",
    },
    {
      verse: `"These are more proverbs of Solomon, collected by the advisers of King Hezekiah of Judah."`,
      reference: "Proverbs 25:1",
    },
    {
      verse: `"It is God’s privilege to conceal things and the king’s privilege to discover them."`,
      reference: "Proverbs 25:2",
    },
    {
      verse: `"No one can comprehend the height of heaven, the depth of the earth, or all that goes on in the king’s mind!"`,
      reference: "Proverbs 25:3",
    },
    {
      verse: `"Remove the impurities from silver, and the sterling will be ready for the silversmith."`,
      reference: "Proverbs 25:4",
    },
    {
      verse: `"Remove the wicked from the king’s court, and his reign will be made secure by justice."`,
      reference: "Proverbs 25:5",
    },
    {
      verse: `"Don’t demand an audience with the king or push for a place among the great."`,
      reference: "Proverbs 25:6",
    },
    {
      verse: `"It’s better to wait for an invitation to the head table than to be sent away in public disgrace."`,
      reference: "Proverbs 25:7",
    },
    {
      verse: `"Just because you’ve seen something, don’t be in a hurry to go to court. For what will you do in the end if your neighbor deals you a shameful defeat?"`,
      reference: "Proverbs 25:8",
    },
    {
      verse: `"When arguing with your neighbor, don’t betray another person’s secret."`,
      reference: "Proverbs 25:9",
    },
    {
      verse: `"Others may accuse you of gossip, and you will never regain your good reputation."`,
      reference: "Proverbs 25:10",
    },
    {
      verse: `"Timely advice is lovely, like golden apples in a silver basket."`,
      reference: "Proverbs 25:11",
    },
    {
      verse: `"To one who listens, valid criticism is like a gold earring or other gold jewelry."`,
      reference: "Proverbs 25:12",
    },
    {
      verse: `"Trustworthy messengers refresh like snow in summer. They revive the spirit of their employer."`,
      reference: "Proverbs 25:13",
    },
    {
      verse: `"A person who promises a gift but doesn’t give it is like clouds and wind that bring no rain."`,
      reference: "Proverbs 25:14",
    },
    {
      verse: `"Patience can persuade a prince, and soft speech can break bones."`,
      reference: "Proverbs 25:15",
    },
    {
      verse: `"Do you like honey? Don’t eat too much, or it will make you sick!"`,
      reference: "Proverbs 25:16",
    },
    {
      verse: `"Don’t visit your neighbors too often, or you will wear out your welcome."`,
      reference: "Proverbs 25:17",
    },
    {
      verse: `"Telling lies about others is as harmful as hitting them with an ax, wounding them with a sword, or shooting them with a sharp arrow."`,
      reference: "Proverbs 25:18",
    },
    {
      verse: `"Putting confidence in an unreliable person in times of trouble is like chewing with a broken tooth or walking on a lame foot."`,
      reference: "Proverbs 25:19",
    },
    {
      verse: `"Singing cheerful songs to a person with a heavy heart is like taking someone’s coat in cold weather or pouring vinegar in a wound."`,
      reference: "Proverbs 25:20",
    },
    {
      verse: `"If your enemies are hungry, give them food to eat. If they are thirsty, give them water to drink."`,
      reference: "Proverbs 25:21",
    },
    {
      verse: `"You will heap burning coals of shame on their heads, and the Lord will reward you."`,
      reference: "Proverbs 25:22",
    },
    {
      verse: `"As surely as a north wind brings rain, so a gossiping tongue causes anger!"`,
      reference: "Proverbs 25:23",
    },
    {
      verse: `"It’s better to live alone in the corner of an attic than with a quarrelsome wife in a lovely home."`,
      reference: "Proverbs 25:24",
    },
    {
      verse: `"Good news from far away is like cold water to the thirsty."`,
      reference: "Proverbs 25:25",
    },
    {
      verse: `"If the godly give in to the wicked, it’s like polluting a fountain or muddying a spring."`,
      reference: "Proverbs 25:26",
    },
    {
      verse: `"It’s not good to eat too much honey, and it’s not good to seek honors for yourself."`,
      reference: "Proverbs 25:27",
    },
    {
      verse: `"A person without self-control is like a city with broken-down walls."`,
      reference: "Proverbs 25:28",
    },
    {
      verse: `"Honor is no more associated with fools than snow with summer or rain with harvest."`,
      reference: "Proverbs 26:1",
    },
    {
      verse: `"Like a fluttering sparrow or a darting swallow, an undeserved curse will not land on its intended victim."`,
      reference: "Proverbs 26:2",
    },
    {
      verse: `"Guide a horse with a whip, a donkey with a bridle, and a fool with a rod to his back!"`,
      reference: "Proverbs 26:3",
    },
    {
      verse: `"Don’t answer the foolish arguments of fools, or you will become as foolish as they are."`,
      reference: "Proverbs 26:4",
    },
    {
      verse: `"Be sure to answer the foolish arguments of fools, or they will become wise in their own estimation."`,
      reference: "Proverbs 26:5",
    },
    {
      verse: `"Trusting a fool to convey a message is like cutting off one’s feet or drinking poison!"`,
      reference: "Proverbs 26:6",
    },
    {
      verse: `"A proverb in the mouth of a fool is as useless as a paralyzed leg."`,
      reference: "Proverbs 26:7",
    },
    {
      verse: `"Honoring a fool is as foolish as tying a stone to a slingshot."`,
      reference: "Proverbs 26:8",
    },
    {
      verse: `"A proverb in the mouth of a fool is like a thorny branch brandished by a drunk."`,
      reference: "Proverbs 26:9",
    },
    {
      verse: `"An employer who hires a fool or a bystander is like an archer who shoots at random."`,
      reference: "Proverbs 26:10",
    },
    {
      verse: `"As a dog returns to its vomit, so a fool repeats his foolishness."`,
      reference: "Proverbs 26:11",
    },
    {
      verse: `"There is more hope for fools than for people who think they are wise."`,
      reference: "Proverbs 26:12",
    },
    {
      verse: `"The lazy person claims, “There’s a lion on the road! Yes, I’m sure there’s a lion out there!”"`,
      reference: "Proverbs 26:13",
    },
    {
      verse: `"As a door swings back and forth on its hinges, so the lazy person turns over in bed."`,
      reference: "Proverbs 26:14",
    },
    {
      verse: `"Lazy people take food in their hand but don’t even lift it to their mouth."`,
      reference: "Proverbs 26:15",
    },
    {
      verse: `"Lazy people consider themselves smarter than seven wise counselors."`,
      reference: "Proverbs 26:16",
    },
    {
      verse: `"Interfering in someone else’s argument is as foolish as yanking a dog’s ears."`,
      reference: "Proverbs 26:17",
    },
    {
      verse: `"Just as damaging as a madman shooting a deadly weapon is someone who lies to a friend and then says, “I was only joking.”"`,
      reference: "Proverbs 26:18-19",
    },
    {
      verse: `"Fire goes out without wood, and quarrels disappear when gossip stops."`,
      reference: "Proverbs 26:20",
    },
    {
      verse: `"A quarrelsome person starts fights as easily as hot embers light charcoal or fire lights wood."`,
      reference: "Proverbs 26:21",
    },
    {
      verse: `"Rumors are dainty morsels that sink deep into one’s heart."`,
      reference: "Proverbs 26:22",
    },
    {
      verse: `"Smooth words may hide a wicked heart, just as a pretty glaze covers a clay pot."`,
      reference: "Proverbs 26:23",
    },
    {
      verse: `"People may cover their hatred with pleasant words, but they’re deceiving you."`,
      reference: "Proverbs 26:24",
    },
    {
      verse: `"They pretend to be kind, but don’t believe them. Their hearts are full of many evils."`,
      reference: "Proverbs 26:25",
    },
    {
      verse: `"While their hatred may be concealed by trickery, their wrongdoing will be exposed in public."`,
      reference: "Proverbs 26:26",
    },
    {
      verse: `"If you set a trap for others, you will get caught in it yourself. If you roll a boulder down on others, it will crush you instead."`,
      reference: "Proverbs 26:27",
    },
    {
      verse: `"A lying tongue hates its victims, and flattering words cause ruin."`,
      reference: "Proverbs 26:28",
    },
    {
      verse: `"Don’t brag about tomorrow, since you don’t know what the day will bring."`,
      reference: "Proverbs 27:1",
    },
    {
      verse: `"Let someone else praise you, not your own mouth—a stranger, not your own lips."`,
      reference: "Proverbs 27:2",
    },
    {
      verse: `"A stone is heavy and sand is weighty, but the resentment caused by a fool is even heavier."`,
      reference: "Proverbs 27:3",
    },
    {
      verse: `"Anger is cruel, and wrath is like a flood, but jealousy is even more dangerous."`,
      reference: "Proverbs 27:4",
    },
    {
      verse: `"An open rebuke is better than hidden love!"`,
      reference: "Proverbs 27:5",
    },
    {
      verse: `"Wounds from a sincere friend are better than many kisses from an enemy."`,
      reference: "Proverbs 27:6",
    },
    {
      verse: `"A person who is full refuses honey, but even bitter food tastes sweet to the hungry."`,
      reference: "Proverbs 27:7",
    },
    {
      verse: `"A person who strays from home is like a bird that strays from its nest."`,
      reference: "Proverbs 27:8",
    },
    {
      verse: `"The heartfelt counsel of a friend is as sweet as perfume and incense."`,
      reference: "Proverbs 27:9",
    },
    {
      verse: `"Never abandon a friend—either yours or your father’s. When disaster strikes, you won’t have to ask your brother for assistance. It’s better to go to a neighbor than to a brother who lives far away."`,
      reference: "Proverbs 27:10",
    },
    {
      verse: `"Be wise, my child, and make my heart glad. Then I will be able to answer my critics."`,
      reference: "Proverbs 27:11",
    },
    {
      verse: `"A prudent person foresees danger and takes precautions. The simpleton goes blindly on and suffers the consequences."`,
      reference: "Proverbs 27:12",
    },
    {
      verse: `"Get security from someone who guarantees a stranger’s debt. Get a deposit if he does it for foreigners."`,
      reference: "Proverbs 27:13",
    },
    {
      verse: `"A loud and cheerful greeting early in the morning will be taken as a curse!"`,
      reference: "Proverbs 27:14",
    },
    {
      verse: `"A quarrelsome wife is as annoying as constant dripping on a rainy day."`,
      reference: "Proverbs 27:15",
    },
    {
      verse: `"Stopping her complaints is like trying to stop the wind or trying to hold something with greased hands."`,
      reference: "Proverbs 27:16",
    },
    {
      verse: `"As iron sharpens iron, so a friend sharpens a friend."`,
      reference: "Proverbs 27:17",
    },
    {
      verse: `"As workers who tend a fig tree are allowed to eat the fruit, so workers who protect their employer’s interests will be rewarded."`,
      reference: "Proverbs 27:18",
    },
    {
      verse: `"As a face is reflected in water, so the heart reflects the real person."`,
      reference: "Proverbs 27:19",
    },
    {
      verse: `"Just as Death and Destruction are never satisfied, so human desire is never satisfied."`,
      reference: "Proverbs 27:20",
    },
    {
      verse: `"Fire tests the purity of silver and gold, but a person is tested by being praised."`,
      reference: "Proverbs 27:21",
    },
    {
      verse: `"You cannot separate fools from their foolishness, even though you grind them like grain with mortar and pestle."`,
      reference: "Proverbs 27:22",
    },
    {
      verse: `"Know the state of your flocks, and put your heart into caring for your herds, for riches don’t last forever, and the crown might not be passed to the next generation."`,
      reference: "Proverbs 27:23-24",
    },
    {
      verse: `"After the hay is harvested and the new crop appears and the mountain grasses are gathered in, your sheep will provide wool for clothing, and your goats will provide the price of a field."`,
      reference: "Proverbs 27:25-26",
    },
    {
      verse: `"And you will have enough goats’ milk for yourself, your family, and your servant girls."`,
      reference: "Proverbs 27:27",
    },
    {
      verse: `"The wicked run away when no one is chasing them, but the godly are as bold as lions."`,
      reference: "Proverbs 28:1",
    },
    {
      verse: `"When there is moral rot within a nation, its government topples easily. But wise and knowledgeable leaders bring stability."`,
      reference: "Proverbs 28:2",
    },
    {
      verse: `"A poor person who oppresses the poor is like a pounding rain that destroys the crops."`,
      reference: "Proverbs 28:3",
    },
    {
      verse: `"To reject the law is to praise the wicked; to obey the law is to fight them."`,
      reference: "Proverbs 28:4",
    },
    {
      verse: `"Evil people don’t understand justice, but those who follow the Lord understand completely."`,
      reference: "Proverbs 28:5",
    },
    {
      verse: `"Better to be poor and honest than to be dishonest and rich."`,
      reference: "Proverbs 28:6",
    },
    {
      verse: `"Young people who obey the law are wise; those with wild friends bring shame to their parents."`,
      reference: "Proverbs 28:7",
    },
    {
      verse: `"Income from charging high interest rates will end up in the pocket of someone who is kind to the poor."`,
      reference: "Proverbs 28:8",
    },
    {
      verse: `"God detests the prayers of a person who ignores the law."`,
      reference: "Proverbs 28:9",
    },
    {
      verse: `"Those who lead good people along an evil path will fall into their own trap, but the honest will inherit good things."`,
      reference: "Proverbs 28:10",
    },
    {
      verse: `"Rich people may think they are wise, but a poor person with discernment can see right through them."`,
      reference: "Proverbs 28:11",
    },
    {
      verse: `"When the godly succeed, everyone is glad. When the wicked take charge, people go into hiding."`,
      reference: "Proverbs 28:12",
    },
    {
      verse: `"People who conceal their sins will not prosper, but if they confess and turn from them, they will receive mercy."`,
      reference: "Proverbs 28:13",
    },
    {
      verse: `"Blessed are those who fear to do wrong, but the stubborn are headed for serious trouble."`,
      reference: "Proverbs 28:14",
    },
    {
      verse: `"A wicked ruler is as dangerous to the poor as a roaring lion or an attacking bear."`,
      reference: "Proverbs 28:15",
    },
    {
      verse: `"A ruler with no understanding will oppress his people, but one who hates corruption will have a long life."`,
      reference: "Proverbs 28:16",
    },
    {
      verse: `"A murderer’s tormented conscience will drive him into the grave. Don’t protect him!"`,
      reference: "Proverbs 28:17",
    },
    {
      verse: `"The blameless will be rescued from harm, but the crooked will be suddenly destroyed."`,
      reference: "Proverbs 28:18",
    },
    {
      verse: `"A hard worker has plenty of food, but a person who chases fantasies ends up in poverty."`,
      reference: "Proverbs 28:19",
    },
    {
      verse: `"The trustworthy person will get a rich reward, but a person who wants quick riches will get into trouble."`,
      reference: "Proverbs 28:20",
    },
    {
      verse: `"Showing partiality is never good, yet some will do wrong for a mere piece of bread."`,
      reference: "Proverbs 28:21",
    },
    {
      verse: `"Greedy people try to get rich quick but don’t realize they’re headed for poverty."`,
      reference: "Proverbs 28:22",
    },
    {
      verse: `"In the end, people appreciate honest criticism far more than flattery."`,
      reference: "Proverbs 28:23",
    },
    {
      verse: `"Anyone who steals from his father and mother and says, “What’s wrong with that?” is no better than a murderer."`,
      reference: "Proverbs 28:24",
    },
    {
      verse: `"Greed causes fighting; trusting the Lord leads to prosperity."`,
      reference: "Proverbs 28:25",
    },
    {
      verse: `"Those who trust their own insight are foolish, but anyone who walks in wisdom is safe."`,
      reference: "Proverbs 28:26",
    },
    {
      verse: `"Whoever gives to the poor will lack nothing, but those who close their eyes to poverty will be cursed."`,
      reference: "Proverbs 28:27",
    },
    {
      verse: `"When the wicked take charge, people go into hiding. When the wicked meet disaster, the godly flourish."`,
      reference: "Proverbs 28:28",
    },
    {
      verse: `"Whoever stubbornly refuses to accept criticism will suddenly be destroyed beyond recovery."`,
      reference: "Proverbs 29:1",
    },
    {
      verse: `"When the godly are in authority, the people rejoice. But when the wicked are in power, they groan."`,
      reference: "Proverbs 29:2",
    },
    {
      verse: `"The man who loves wisdom brings joy to his father, but if he hangs around with prostitutes, his wealth is wasted."`,
      reference: "Proverbs 29:3",
    },
    {
      verse: `"A just king gives stability to his nation, but one who demands bribes destroys it."`,
      reference: "Proverbs 29:4",
    },
    {
      verse: `"To flatter friends is to lay a trap for their feet."`,
      reference: "Proverbs 29:5",
    },
    {
      verse: `"Evil people are trapped by sin, but the righteous escape, shouting for joy."`,
      reference: "Proverbs 29:6",
    },
    {
      verse: `"The godly care about the rights of the poor; the wicked don’t care at all."`,
      reference: "Proverbs 29:7",
    },
    {
      verse: `"Mockers can get a whole town agitated, but the wise will calm anger."`,
      reference: "Proverbs 29:8",
    },
    {
      verse: `"If a wise person takes a fool to court, there will be ranting and ridicule but no satisfaction."`,
      reference: "Proverbs 29:9",
    },
    {
      verse: `"The bloodthirsty hate blameless people, but the upright seek to help them."`,
      reference: "Proverbs 29:10",
    },
    {
      verse: `"Fools vent their anger, but the wise quietly hold it back."`,
      reference: "Proverbs 29:11",
    },
    {
      verse: `"If a ruler pays attention to liars, all his advisers will be wicked."`,
      reference: "Proverbs 29:12",
    },
    {
      verse: `"The poor and the oppressor have this in common—the Lord gives sight to the eyes of both."`,
      reference: "Proverbs 29:13",
    },
    {
      verse: `"If a king judges the poor fairly, his throne will last forever."`,
      reference: "Proverbs 29:14",
    },
    {
      verse: `"To discipline a child produces wisdom, but a mother is disgraced by an undisciplined child."`,
      reference: "Proverbs 29:15",
    },
    {
      verse: `"When the wicked are in authority, sin flourishes, but the godly will live to see their downfall."`,
      reference: "Proverbs 29:16",
    },
    {
      verse: `"Discipline your children, and they will give you peace of mind and will make your heart glad."`,
      reference: "Proverbs 29:17",
    },
    {
      verse: `"When people do not accept divine guidance, they run wild. But whoever obeys the law is joyful."`,
      reference: "Proverbs 29:18",
    },
    {
      verse: `"Words alone will not discipline a servant; the words may be understood, but they are not heeded."`,
      reference: "Proverbs 29:19",
    },
    {
      verse: `"There is more hope for a fool than for someone who speaks without thinking."`,
      reference: "Proverbs 29:20",
    },
    {
      verse: `"A servant pampered from childhood will become a rebel."`,
      reference: "Proverbs 29:21",
    },
    {
      verse: `"An angry person starts fights; a hot-tempered person commits all kinds of sin."`,
      reference: "Proverbs 29:22",
    },
    {
      verse: `"Pride ends in humiliation, while humility brings honor."`,
      reference: "Proverbs 29:23",
    },
    {
      verse: `"If you assist a thief, you only hurt yourself. You are sworn to tell the truth, but you dare not testify."`,
      reference: "Proverbs 29:24",
    },
    {
      verse: `"Fearing people is a dangerous trap, but trusting the Lord means safety."`,
      reference: "Proverbs 29:25",
    },
    {
      verse: `"Many seek the ruler’s favor, but justice comes from the Lord."`,
      reference: "Proverbs 29:26",
    },
    {
      verse: `"The righteous despise the unjust; the wicked despise the godly."`,
      reference: "Proverbs 29:27",
    },
    {
      verse: `"The sayings of Agur son of Jakeh contain this message. I am weary, O God; I am weary and worn out, O God."`,
      reference: "Proverbs 30:1",
    },
    {
      verse: `"I am too stupid to be human, and I lack common sense."`,
      reference: "Proverbs 30:2",
    },
    {
      verse: `"I have not mastered human wisdom,
    nor do I know the Holy One."`,
      reference: `Proverbs 30:3`,
    },
    {
      verse: `"Who but God goes up to heaven and comes back down?
    Who holds the wind in his fists?
Who wraps up the oceans in his cloak?
    Who has created the whole wide world?
What is his name—and his son’s name?
    Tell me if you know!"`,
      reference: `Proverbs 30:4`,
    },

    {
      verse: `"Every word of God proves true. He is a shield to all who come to him for protection."`,
      reference: "Proverbs 30:5",
    },
    {
      verse: `"Do not add to his words, or he may rebuke you and expose you as a liar."`,
      reference: "Proverbs 30:6",
    },
    {
      verse: `"O God, I beg two favors from you; let me have them before I die."`,
      reference: "Proverbs 30:7",
    },
    {
      verse: `"First, help me never to tell a lie. Second, give me neither poverty nor riches! Give me just enough to satisfy my needs."`,
      reference: "Proverbs 30:8",
    },
    {
      verse: `"For if I grow rich, I may deny you and say, “Who is the Lord?” And if I am too poor, I may steal and thus insult God’s holy name."`,
      reference: "Proverbs 30:9",
    },

    {
      verse: `"Never slander a worker to the employer, or the person will curse you, and you will pay for it."`,
      reference: "Proverbs 30:10",
    },
    {
      verse: `"Some people curse their father and do not thank their mother."`,
      reference: "Proverbs 30:11",
    },
    {
      verse: `"They are pure in their own eyes, but they are filthy and unwashed."`,
      reference: "Proverbs 30:12",
    },
    {
      verse: `"They look proudly around, casting disdainful glances."`,
      reference: "Proverbs 30:13",
    },
    {
      verse: `"They have teeth like swords and fangs like knives. They devour the poor from the earth and the needy from among humanity."`,
      reference: "Proverbs 30:14",
    },
    {
      verse: `"The leech has two suckers that cry out, “More, more!” There are three things that are never satisfied—no, four that never say, “Enough!”:"`,
      reference: "Proverbs 30:15",
    },
    {
      verse: `"the grave, the barren womb, the thirsty desert, the blazing fire."`,
      reference: "Proverbs 30:16",
    },
    {
      verse: `"The eye that mocks a father and despises a mother’s instructions will be plucked out by ravens of the valley and eaten by vultures."`,
      reference: "Proverbs 30:17",
    },
    {
      verse: `"There are three things that amaze me—no, four things that I don’t understand:"`,
      reference: "Proverbs 30:18",
    },
    {
      verse: `"how an eagle glides through the sky, how a snake slithers on a rock, how a ship navigates the ocean, how a man loves a woman."`,
      reference: "Proverbs 30:19",
    },
    {
      verse: `"An adulterous woman consumes a man, then wipes her mouth and says, “What’s wrong with that?”"`,
      reference: "Proverbs 30:20",
    },
    {
      verse: `"There are three things that make the earth tremble—no, four it cannot endure:"`,
      reference: "Proverbs 30:21",
    },
    {
      verse: `"a slave who becomes a king, an overbearing fool who prospers,"`,
      reference: "Proverbs 30:22",
    },
    {
      verse: `"a bitter woman who finally gets a husband, a servant girl who supplants her mistress."`,
      reference: "Proverbs 30:23",
    },
    {
      verse: `"There are four things on earth that are small but unusually wise:"`,
      reference: "Proverbs 30:24",
    },
    {
      verse: `"Ants—they aren’t strong, but they store up food all summer."`,
      reference: "Proverbs 30:25",
    },
    {
      verse: `"Hyraxes—they aren’t powerful, but they make their homes among the rocks."`,
      reference: "Proverbs 30:26",
    },
    {
      verse: `"Locusts—they have no king, but they march in formation."`,
      reference: "Proverbs 30:27",
    },
    {
      verse: `"Lizards—they are easy to catch, but they are found even in kings’ palaces."`,
      reference: "Proverbs 30:28",
    },
    {
      verse: `"There are three things that walk with stately stride—no, four that strut about:"`,
      reference: "Proverbs 30:29",
    },
    {
      verse: `"the lion, king of animals, who won’t turn aside for anything,"`,
      reference: "Proverbs 30:30",
    },
    {
      verse: `"the strutting rooster, the male goat, a king as he leads his army."`,
      reference: "Proverbs 30:31",
    },
    {
      verse: `"If you have been a fool by being proud or plotting evil, cover your mouth in shame."`,
      reference: "Proverbs 30:32",
    },
    {
      verse: `"As the beating of cream yields butter and striking the nose causes bleeding, so stirring up anger causes quarrels."`,
      reference: "Proverbs 30:33",
    },

    {
      verse: `"The sayings of King Lemuel contain this message, which his mother taught him."`,
      reference: "Proverbs 31:1",
    },
    {
      verse: `"O my son, O son of my womb, O son of my vows,"`,
      reference: "Proverbs 31:2",
    },
    {
      verse: `"do not waste your strength on women, on those who ruin kings."`,
      reference: "Proverbs 31:3",
    },
    {
      verse: `"It is not for kings, O Lemuel, to guzzle wine. Rulers should not crave alcohol."`,
      reference: "Proverbs 31:4",
    },
    {
      verse: `"For if they drink, they may forget the law and not give justice to the oppressed."`,
      reference: "Proverbs 31:5",
    },
    {
      verse: `"Alcohol is for the dying, and wine for those in bitter distress."`,
      reference: "Proverbs 31:6",
    },
    {
      verse: `"Let them drink to forget their poverty and remember their troubles no more."`,
      reference: "Proverbs 31:7",
    },
    {
      verse: `"Speak up for those who cannot speak for themselves; ensure justice for those being crushed."`,
      reference: "Proverbs 31:8",
    },
    {
      verse: `"Yes, speak up for the poor and helpless, and see that they get justice."`,
      reference: "Proverbs 31:9",
    },
    {
      verse: `"Who can find a virtuous and capable wife? She is more precious than rubies."`,
      reference: "Proverbs 31:10",
    },
    {
      verse: `"Her husband can trust her, and she will greatly enrich his life."`,
      reference: "Proverbs 31:11",
    },
    {
      verse: `"She brings him good, not harm, all the days of her life."`,
      reference: "Proverbs 31:12",
    },
    {
      verse: `"She finds wool and flax and busily spins it."`,
      reference: "Proverbs 31:13",
    },
    {
      verse: `"She is like a merchant’s ship, bringing her food from afar."`,
      reference: "Proverbs 31:14",
    },
    {
      verse: `"She gets up before dawn to prepare breakfast for her household and plan the day’s work for her servant girls."`,
      reference: "Proverbs 31:15",
    },
    {
      verse: `"She goes to inspect a field and buys it; with her earnings she plants a vineyard."`,
      reference: "Proverbs 31:16",
    },
    {
      verse: `"She is energetic and strong, a hard worker."`,
      reference: "Proverbs 31:17",
    },
    {
      verse: `"She makes sure her dealings are profitable; her lamp burns late into the night."`,
      reference: "Proverbs 31:18",
    },
    {
      verse: `"Her hands are busy spinning thread, her fingers twisting fiber."`,
      reference: "Proverbs 31:19",
    },
    {
      verse: `"She extends a helping hand to the poor and opens her arms to the needy."`,
      reference: "Proverbs 31:20",
    },
    {
      verse: `"She has no fear of winter for her household, for everyone has warm clothes."`,
      reference: "Proverbs 31:21",
    },
    {
      verse: `"She makes her own bedspreads. She dresses in fine linen and purple gowns."`,
      reference: "Proverbs 31:22",
    },
    {
      verse: `"Her husband is well known at the city gates, where he sits with the other civic leaders."`,
      reference: "Proverbs 31:23",
    },
    {
      verse: `"She makes belted linen garments and sashes to sell to the merchants."`,
      reference: "Proverbs 31:24",
    },
    {
      verse: `"She is clothed with strength and dignity, and she laughs without fear of the future."`,
      reference: "Proverbs 31:25",
    },
    {
      verse: `"When she speaks, her words are wise, and she gives instructions with kindness."`,
      reference: "Proverbs 31:26",
    },
    {
      verse: `"She carefully watches everything in her household and suffers nothing from laziness."`,
      reference: "Proverbs 31:27",
    },
    {
      verse: `"Her children stand and bless her. Her husband praises her:"`,
      reference: "Proverbs 31:28",
    },
    {
      verse: `"There are many virtuous and capable women in the world, but you surpass them all!"`,
      reference: "Proverbs 31:29",
    },
    {
      verse: `"Charm is deceptive, and beauty does not last; but a woman who fears the Lord will be greatly praised."`,
      reference: "Proverbs 31:30",
    },
    {
      verse: `"Reward her for all she has done. Let her deeds publicly declare her praise."`,
      reference: "Proverbs 31:31",
    },
  ];

  let random = Math.floor(Math.random() * proverbs.length);
  verse.textContent = proverbs[random].verse;
  ref.textContent = proverbs[random].reference;
});
