import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';

const NoteList = (props) => {
    return(
        <View>
            <ScrollView>
                <Text>{props.noteText}</Text>
            </ScrollView>
        </View>
        
    );
}

const mapStateToProps = state => {
    return {
        noteText: state.noteText,
    }
}

export default connect(mapStateToProps, null)(NoteList);