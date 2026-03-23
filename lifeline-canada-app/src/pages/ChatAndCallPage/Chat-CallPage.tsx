import { useParams } from 'react-router-dom';
import OnlineChatLines from '../../components/CrisisCenter/Chat-and-Call/OnlineChatLines';
import CallLines from '../../components/CrisisCenter/Chat-and-Call/CallLines';
import TextChat from '../../components/CrisisCenter/Chat-and-Call/TextChat';
import ChatCrisisSupportHub from '../../components/CrisisCenter/Chat-and-Call/ChatCrisisSupportHub';
import CrisisCenterDirectory from '../../components/CrisisCenter/Chat-and-Call/CallSupportHub';
import TextChatSupportHub from '../../components/CrisisCenter/Chat-and-Call/TextChatHub';

function ChatAndCallLinePage() {
  const { mode } = useParams<{ mode: string }>();
  console.log({ mode });
  switch (mode?.toLowerCase().trim()) {
    case 'email-chat':
      return (
        <>
          <OnlineChatLines />
          <ChatCrisisSupportHub />
        </>
      );
    case 'support-and-call-lines':
      return (
        <>
          <CallLines />
          <CrisisCenterDirectory />
        </>
      );

    case 'textchat':
      return (
        <>
          <TextChat />;
          <TextChatSupportHub />
        </>
      );

    default:
      return <>Page not found</>;
  }
}

export default ChatAndCallLinePage;
