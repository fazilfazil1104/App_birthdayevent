// src/ChatWidget.js
import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // This function adds the Tawk.to script to the document
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66a7d96232dca6db2cb72a26/1i3vqib54'; // Use your Tawk.to script URL here
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default ChatWidget;
