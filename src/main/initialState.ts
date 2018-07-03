import { ApplicationState } from "../renderer/store";

export const defaultState: ApplicationState = {
  example: {
    number: 0,
    apiError: '',
    dog: '',
    message: {
      content: '',
      sender: '',
      isSent: false
    },
    messageError: '',
    fetching: false
  }
}

export default defaultState;