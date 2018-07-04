import React, { Component } from 'react';

const _withLog = (BaseInputComponent) => {
  class LogInput extends Component {
    logOnTextChange = () => {
      console.log('logOnTextChange');

      if (this.props.onPress) {
        this.props.onPress();
      }
    };

    render() {
      console.log('render _withLog');
      const newProps = {
        ...this.props,
        onTextChange: this.logOnTextChange,
      };

      return (
        <BaseInputComponent {...newProps} />
      );
    }
  }

  LogInput.displayName = 'Styled(Input)';

  return LogInput;
}

export default _withLog;