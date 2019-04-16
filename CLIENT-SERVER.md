# CLIENT - SERVER

### How a request gets served
> Computers connected in between are called clients and servers. A client act as a machine, where information, resources, data etc. required for some operation or useful purpose in it. client will request for them to the server. A server will provide services to the respective client. A simplified diagram of how they interact might look like this:

![client-server service served](https://mdn.mozillademos.org/files/8973/Client-server.jpg)

>
* Clients are the typical browser, application or machine (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).
* Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

#

For now, let's imagine that the web is a road. On one end of the road is the client, which is like your house. On the other end of the road is the server, which is a shop you want to buy something from.

![client-server real life example](https://mdn.mozillademos.org/files/9749/road.jpg)

In addition to the client and the server, we also need to say hello to:

* **Your internet connection:** Allows you to send and receive data on the web. It's basically like the street between your house and the shop.
* **TCP/IP:** Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the web. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).
* **DNS:** Domain Name Servers are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.
* **HTTP:** Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.
* **Component files:** A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
  * **Code files:** Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.
  * **Assets:** This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.


## So what happens, exactly?

### **Example : When we are requesting a web service from web server then how server will served our request ?**
When you type a web address into your browser (for our analogy that's like walking to the shop):

1.  The browser goes to the DNS server, and finds the real address of the server that the website lives on (you find the address of the shop).
2.  The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
3.  If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives you your goods, and you bring them back to your house).
4.  The browser assembles the small chunks into a complete website and displays it to you (the goods arrive at your door — new shiny stuff, awesome!).

