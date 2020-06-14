function solve() {
   const chatMessages = document.getElementById('chat_messages');
   const chatInput = document.getElementById('chat_input');
   const sendButton = document.getElementById('send');

   sendButton.addEventListener('click', function () {
      const newDivMessageElement = document.createElement('div');
      newDivMessageElement.className = "message my-message";
      newDivMessageElement.textContent = chatInput.value;
      chatMessages.appendChild(newDivMessageElement);
      chatInput.value = '';
   });
}


