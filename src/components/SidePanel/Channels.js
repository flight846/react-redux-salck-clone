import React, { Component } from 'react';
import firebase from '../../firebase';
import { Menu, Icon, Modal, Form, Input, Button } from 'semantic-ui-react'

export class Channels extends Component {
    state = {
        user: this.props.currentUser,
        channels: [],
        channelName: '',
        channelDetails: '',
        channelRefs: firebase.database().ref('channels'),
        modal: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    openModal = () => this.setState({ modal: true })

    closeModal = () => this.setState({ modal: false })

    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            this.addChannel();
        }
    }

    addChannel = () => {
        const { channelRefs, channelName, channelDetails, user } = this.state;
        const key = channelRefs.push().key;
        const newChannel = {
            id: key,
            name: channelName,
            details: channelDetails,
            createdBy: user.displayName,
            avatar: user.photoURL
        }
        channelRefs
            .child(key)
            .update(newChannel)
            .then(() => {
                this.setState({
                    channelName: '',
                    channelDetails: ''
                })
                this.closeModal();
                console.log('Channel Added')
            })
            .catch(err => console.log(err))

    }

    isFormValid = ({ channelName, channelDetails }) => channelName && channelDetails

    render() {
        const { channels, modal } = this.state;

        return (
            <React.Fragment>
                <Menu.Menu style={{ paddingBottom: '2em' }}>
                    <Menu.Item>
                        <span>
                            <Icon name='exchange' />CHANNELS
                    </span>{" "}
                        ({channels.length}) <Icon name='add' onClick={this.openModal} />
                    </Menu.Item>
                </Menu.Menu>
                {/* Add channel modal */}
                <Modal basic open={modal} onClose={this.closeModal}>
                    <Modal.Header>Add a Channel</Modal.Header>

                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <Input fluid label='Name of Channel' name='channelName' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <Input fluid label='Channel Details' name='channelDetails' onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button color='red' inverted onClick={this.closeModal}>
                            <Icon name='remove' />Cancel
                        </Button>
                        <Button color='green' inverted onClick={this.handleSubmit}>
                            <Icon name='checkmark' />Add
                        </Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Channels
