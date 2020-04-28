import React, {useState} from 'react';
import {View, TouchableOpacity, ScrollView, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {addNoteText} from '../../redux/action';

const Note = (props) => {
    const [noteText, setNoteText] = useState('');
    return (
        <View>
            <TextInput 
            onChangeText={text => setNoteText(text) }
            placeHolder="Type your Note"
             />
            <Button title="SAVE" onPress={() => props.addNoteText(noteText)} />

        </View>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addNoteText: text => dispatch(addNoteText(text)),
    }
}

export default connect(null, mapDispatchToProps)(Note);