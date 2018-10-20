// src/Home/homeContainer.js
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addNote, deleteNote } from "./actions";

import Note from "./components/Note";

class Home extends Component {
  // constructorはthis.stateを使う時のみ必要。reactの機能ではなく、jsの機能のなので注意。
  constructor(props) {
    super(props);
    this.state = {
      noteText: ""
    };
  }

  // renderとreturnの間には、render以下で使う変数を定義できる。ここではJSXをnotesという変数に入れている。
  // arrayの中には、keyを保存せず、子コンポーネントに渡すときにゼロからmapでキーを生成している。
  render() {
    let notes = this.props.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTER -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder=">note"
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          onPress={this.addNote2.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote2() {
    if (this.state.noteText) {
      this.props.onAddNote(this.state.noteText);
      this.setState({ noteText: "" });
    }
  }

  deleteNote(key) {
    console.log(this.props.noteArray)
    if (!this.props.noteArray) return;

    this.props.noteArray.splice(key, 1);
    this.setState({ noteArray: this.props.noteArray });
  }


}

const mapStateToProps = state => {
  // stateとはstoreのこと。巨大なjsonで全てのstateを管理する
  console.log(state)
  return {
    noteArray: state.home.noteArray
  };
};

const mapDispatchToProps = dispatch => {
  // dispatchも確認してみよう。
  console.log(dispatch)
  return {
    onAddNote: text => dispatch(addNote(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#E91E63",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});