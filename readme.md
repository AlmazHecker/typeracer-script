# Typeracer Hack
A simple script that allows you to prank your friends with fast typing speed.

## Steps

1. Go to the https://play.typeracer.com
2. Open up browser console
3. Paste the following into console right before the race starts
4. Enjoy!

## Script

```javascript
const input=document.getElementsByClassName('txtInput')[0];let count=0; const interval=setInterval(()=>{const panel=document.getElementsByClassName('inputPanel');const currentLetter=panel[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children?.[count]?.innerHTML; input.focus();if(currentLetter){input.value+=currentLetter;}else{clearInterval(interval);}++count;},2000);
```