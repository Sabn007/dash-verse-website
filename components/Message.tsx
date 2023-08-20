// components/Message.tsx
import React from "react";

interface MessageProps {
  sender: string;
  content: string;
  imageUrl: string;
}

const Message: React.FC<MessageProps> = ({ sender, content, imageUrl }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md my-4">
      <div className="mb-4">
        <p className="font-bold mb-2">{sender}</p>
        <p>{content}</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={imageUrl} alt="Attached" className="max-w-full h-auto" />
      </div>
      <p className="mt-2 text-center">{sender}</p>
    </div>
  );
};

export default Message;
