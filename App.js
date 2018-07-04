import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Form, Item, Label, Input } from 'native-base';
import _withLog from './_withLog';

const LoggingInput = _withLog(Input);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  onChangeText = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Form>
            <Item floatingLabel>
              <Label>Input 1</Label>
              <Input value={this.state.inputValue} onChangeText={this.onChangeText} />
            </Item>
            <Item floatingLabel>
              <Label>Input 2</Label>
              <Input value={this.state.inputValue} onChangeText={this.onChangeText} />
            </Item>
            <Item floatingLabel>
              <Label>LoggingInput</Label>
              <LoggingInput value={this.state.inputValue} onChangeText={this.onChangeText} />
            </Item>
          </Form>
          <View style={styles.content}>
            <Text>State Value: {this.state.inputValue}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 40,
    padding: 15,
  },
});
