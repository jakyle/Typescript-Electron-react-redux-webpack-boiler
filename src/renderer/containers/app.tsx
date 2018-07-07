import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Dispatch } from 'redux';
import { ExampleActions } from '../store/example/types';
import { incrementNumber, decrementNumber, apiCallRequest, messageCallRequest, initialStateRequest, saveStatePost } from '../store/example/action';
import logo from '../../assets/images/logo.png';
import Message from '../../shared/models/message';

interface AppProps { };
interface StoreProps {
  number: number;
  dog: string;
  fetching: boolean,
  apiError: string,
  message: Message,
  messageError: string,
}

interface ConnectedStates {
  onIncrementNumber: () => void;
  onDecrementNumber: () => void;
  onRequestDog: () => void;
  onRequestMessage: () => void;
  onRequestInitialState: () => void;
  onSaveStatePost: () => void;
}

type AllAppProps = AppProps & StoreProps & ConnectedStates

interface AppState {
  message: Message;
};

class App extends React.Component<AllAppProps, AppState> {

  state = {
    message: {
      sender: '',
      content: '',
      isSent: false
    } 
  }


  public componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload)
    this.props.onRequestInitialState();
  }

  public componentWillUnmount() {
    this.handleUnload();
    window.removeEventListener('beforeunload', this.handleUnload)
  }

  public handleUnload = () => {
    this.props.onSaveStatePost();
  }

  public handleIncrementButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onIncrementNumber();
  }

  public handleDecrementButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onDecrementNumber();
  }

  public handleDogAPIButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onRequestDog();
  }

  public handleMessageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onRequestMessage();
  } 

  public render(): JSX.Element {

    const { number, dog, apiError, fetching, message, messageError } = this.props;
    
    return (
      <div className="App">
        <img src={dog ? dog : logo} height={100} width={150}/> 
        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={this.handleDogAPIButtonClick}>Request a Dog</button>
        )}

        {apiError && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        
        <div>
          <button onClick={this.handleIncrementButtonClick}>Increment</button>
          <button onClick={this.handleDecrementButtonClick}>Decrement</button>  
        </div>
        <h1>{number}</h1>
        {message.content ? <h1>{message.content}</h1> : null}
        <button onClick={this.handleMessageButtonClick}>Get Message</button>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState): StoreProps => {
  const { number, dog, fetching, apiError, message, messageError } = state.example;
  return { number, dog, fetching, apiError, message, messageError };
};

const mapDispatchToProps = (dispatch: Dispatch<ExampleActions>): ConnectedStates => {
  return {
    onIncrementNumber: () => dispatch(incrementNumber()),
    onDecrementNumber: () => dispatch(decrementNumber()),
    onRequestDog: () => dispatch(apiCallRequest()),
    onRequestMessage: () => dispatch(messageCallRequest()),
    onRequestInitialState: () => dispatch(initialStateRequest()),
    onSaveStatePost: () => dispatch(saveStatePost())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);