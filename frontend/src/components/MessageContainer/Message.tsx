interface MessageProps {
  message?: String;
}
const Message = ({ message = "Hello, how can I help you?" }: MessageProps) => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              "https://tse4.mm.bing.net/th?id=OIP.urs9CLtRNkSZtaP2K1uOIAHaHa&pid=Api&P=0&h=220"
            }
          />
        </div>
      </div>
      <div
        className={`chat-bubble text-white bg-blue-500`}
      >
      Hi' Whats going on?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};
export default Message;
