var phraseLength = phrases.length;
var phrases = [
    'There&apos;s ' + phraseLength  + ' of these!',
    'Have you tried turning it off and on again?',
    'Home of something, but we don&apos;t remember!',
    'Absolutly no cookies!',
    'Have you tried combustion? It&apos;s fire!',,
    'HTML rules, PHP drools!',
    'Comes, redesigns website, refuses to elaborate, leaves!',
    'Open source for life!',
    'GNU/Linux is the superior OS!',
    'EMACS vs. VIM, The final round!',
    'Latte dock is great!',
    'I &hearts; Kde plasma!',
    'Fork me on <a href="https://github.com/agent-seed/agentseed.org/">Github</a>!',
    'Inspired by Minecraft!',
    'Powered by Coffee!',
    'Have a nice day!',
    'Press CTRL + U to view source!',
    'Support local businesses!',
    'There&apos;s a lot of these!',
    'Minceraft!',
    'Follow the white rabbit!',
    'Great buy, only 99&cent;!',
    'Firefox is the best browser!',
    'Contrary to popular opinion, I enjoy food!',
    '<a href="mailto:admin@agentseed.org">Email me</a> new things to put here!',
    'Water is life!',
    'Undefined!',
    'Luke, I am your father!',
    'tsck!',
    'git clone girlfriend!',
    'I &hearts; Wikipedia!',
    'The cake is a lie!',
    'x + x = x!',
    'Pineapple on pizza is mid, but not evil!',
    'Hulk smash!',
    'Please don&apos;t sue me!',
    'Doh!',
    'Caught in 4k!',
    'Colby!',
    'Now in full HD!',
    'Do good every day!',
    'Oh my god, they killed kenny!',
    'Wubba-lub-dub-dub!',
    'In and out, thirty minute adventure!',
    'The oldest anarchy server in minecraft!',
    'Correcthorsebatterystaple',
    'You don&apos;t know the power of the dark side!',
    'ACAB!',
    'Oof!',
    '"I&apos;m in me mum&apos;s car, vroom vroom" "Get out me car!" "Aww"',
    'Yeet!',
    'Windows.exe stopped responding!',
    'Delete System32, make your computer run faster!',
    'Well, bite my biscut!',
    'Thanks to today&apos;s sponser, RAID Shadow legends!',
    'rockyou.txt!',
    'No catnip?',
    '[Parental advisory, explicit content]',
    'sssssSSSS BOOM!',
    'Titans GO!',
    'Removed Herobrine!',
    'Added Herobrine!',
    'Congratulations, you&apos;re the millionth visitor!',
    'Double kill!',
    'Triple kill!',
    'Killing spree!',
    '!important',
    'Error 418, I&apos;m a teapot!',
    'The code <i>is</i> the documentation!',
    '(...) Java, otherwise know as JavaScript (...)',
    'Read the FAQ!',
    'Bot friendly!',
    'I change every five seconds!',
    'Shoutout to my mom!',
    'Shoutout to my dad!',
    'Something!',
    'Nothing!',
    'Why',
    'Why&apos;d the chicken cross the road?',
    'To be, or not to be!',
    'To the moon!',
    ]
var phraseLength = phrases.length;
function marquee() {
    var num = randomNumber(phraseLength);
    document.getElementById('banner').innerHTML = phrases[num];
    console.log( phrases[0])
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function changeMarquee() {
timer = setInterval(function() {marquee();}, 5000);
}