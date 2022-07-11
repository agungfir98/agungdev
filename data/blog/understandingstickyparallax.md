---
title: understanding sticky parallax
createdAt: 1657262826913
draft: true
image: ""
---

I build my current portfolio site by ~~stealing~~ taking some reference. As they say, great artist steal. LOL

One of the reference I took is from the landing page of the Margelo.io. a React Native Avengers as they say it. I like its design simple, combined with parallax make it awesome. so I tried to steal it literally.

I found the referrence because I'm a subscriber to Takuya (devaslife channel), He made a video documenting the process of developing it. so I tried follow along and modified it to my need.

It didn't go smoothly though, I got confused following along. I almost never use useContext, and useRef plus understanding Takuya's approach to creating the parallax. So I tried to wrap my head around and this post will be a learning report for myself, but I'm not going to talk about useContext and useRef. Well, if you are reading this, I hope you can learn something too.

First, how does paralax works? it's a difference between one object to the other as seen by an observer from two separate point. It's like how far objects like for example: earth's moon seem to stay still and keep following you while the nearest object from you move away quickly when you pass them.

Now to make a website achieve the same thing first we need to know our point in that page. Wee need to know how far we scroll through a web page.

First we need to create a scrollObserver so that we know how far we've scroll

```js
document.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
});
```

then we'd want to know our object target
