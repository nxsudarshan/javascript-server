# CLIENT - SERVER

### How a request gets served
> Computers connected to the web are called clients and servers. A simplified diagram of how they interact might look like this:

![client-server service served](https://mdn.mozillademos.org/files/8973/Client-server.jpg)

>
* Clients are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).
* Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

#

For now, let's imagine that the web is a road. On one end of the road is the client, which is like your house. On the other end of the road is the server, which is a shop you want to buy something from.

![client-server real life example](https://mdn.mozillademos.org/files/9749/road.jpg)

In addition to the client and the server, we also need to say hello to:

* Your internet connection: Allows you to send and receive data on the web. It's basically like the street between your house and the shop.
* TCP/IP: Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the web. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).
* DNS: Domain Name Servers are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.
* HTTP: Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.
* Component files: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
  * Code files: Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.
  * Assets: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.

#
