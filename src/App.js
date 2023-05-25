import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const projectID = '9e117e83-9306-4c81-b0e8-b2a57f935b83';
const App =() => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
       <ChatEngine
       height ="100vh"
       projectID={projectID}
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
     />
    );
}

export default App;