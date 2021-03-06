const app = new Vue({ //  (option object)

    // proprietà
    el: '#app', // elemento radice

    // data object -> array-oggetti-ecc..
    data: {

        active: false,

        optionChatActive: false,

        optionUserActive: false,

        newContactTab: false,

        newContactName: "",

        newContactImg: "",

        search: "",

        textInput: "",

        replyList: ["ok 😉", "ho da fare ora!", "VueJs è bello ma a volte fa impazzire", "no!"],

        isWrite: {
            activeWrite: false,
            textWrite: "Sta scrivendo ...",
        },

        isOnline: {
            online: false,
            textOnline: "Online",
        },

        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        hours: "16:15",
                        message: 'Tutto fatto!',
                        status: 'received',
                        optionMessage: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        hours: "16:30",
                        message: 'Ciao come stai?',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        hours: "16:30",
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        optionMessage: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        hours: "16:35",
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        optionMessage: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        hours: "10:10",
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        optionMessage: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        hours: "10:20",
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        hours: "16:15",
                        message: 'Ah scusa!',
                        status: 'received',
                        optionMessage: false,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        optionMessage: false,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        optionMessage: false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Non ancora',
                        status: 'received',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        hours: "15:51",
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        optionMessage: false,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        optionMessage: false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        optionMessage: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        hours: "15:51",
                        message: 'OK!!',
                        status: 'received',
                        optionMessage: false,
                    }
                ],
            }
        ]
    },

    // methods object -> funzioni
    methods: {
        sendMessage() {
            const data = new Date

            const dataTransform = `${data.getDate()}/${data.getMonth(+1)}/${data.getFullYear()}/ ${data.getHours()}:${data.getMinutes()}:${data.getMilliseconds()}`;

            const hoursTransform = `${data.getHours()}:${data.getMinutes()}`

            const newMessage = {
                date: dataTransform,
                hours: hoursTransform,
                message: this.textInput,
                status: 'sent',
                optionMessage: false,
            }
            this.contacts[this.active].messages.push(newMessage)

            this.textInput = ""

            this.onlineUser()
            this.userStartWrite()

            /* pattern="\s*(\S\s*){1,} */
            if (newMessage.message < 1) {
                this.contacts[this.active].messages.splice(this.contacts[this.active].messages.length - 1, 1)
            } else {
                const replyMessage = {
                    date: dataTransform,
                    hours: hoursTransform,
                    message: this.replyList[Math.floor(Math.random() * (this.replyList.length - 1 + 1))],
                    status: 'recieved',
                    optionMessage: false,
                }

                setTimeout(() => {
                    this.contacts[this.active].messages.push(replyMessage)
                    this.userStopWrite()
                }, 1000)

                setTimeout(() => {
                    this.offlineUser()
                }, 4000)
            }

        },

        messageOption(i) {
            if (this.contacts[this.active].messages[i].optionMessage == false) {
                this.contacts[this.active].messages[i].optionMessage = true
            } else {
                this.contacts[this.active].messages[i].optionMessage = false
            }
        },

        openOptionChat() {
            if (this.optionChatActive === false) {
                this.optionChatActive = true
            } else {
                this.optionChatActive = false
            }
        },

        openOptionUser() {
            if (this.optionUserActive === false) {
                this.optionUserActive = true
            } else {
                this.optionUserActive = false
            }
        },

        openTabNewContact() {
            this.newContactTab = true
            this.optionUserActive = false

        },

        leaveTabNewContact() {
            this.newContactTab = false
        },

        deleteMessage(i) {
            this.contacts[this.active].messages.splice(i, 1)
        },

        deleteChat() {
            this.contacts[this.active].messages = []
            this.optionChatActive = false
        },

        deleteContact() {
            if (this.contacts.length == 1) {
                this.contacts.splice(this.active, 1)
                this.active = false
                this.optionChatActive = false
                this.newContactTab = true
            } else {
                this.contacts.splice(this.active, 1)
                this.active = false
                this.optionChatActive = false
            }


        },

        filterVisibility() {
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                    contact.visible = true
                } else {
                    contact.visible = false
                }

            })

        },

        onlineUser() {
            this.isOnline.online = true
        },

        offlineUser() {
            this.isOnline.online = false
        },

        userStartWrite() {
            this.isWrite.activeWrite = true
        },

        userStopWrite() {
            this.isWrite.activeWrite = false
        },

        addNewContact() {

            if (this.newContactName < 1) {
                this.newContactName = ""
                this.newContactImg = ""
            } else if (this.newContactImg < 1) {
                this.newContactName = ""
                this.newContactImg = ""
            } else {
                const newContact = {
                    name: this.newContactName,
                    avatar: this.newContactImg,
                    visible: true,
                    messages: []
                }

                this.newContactName = ""
                this.newContactImg = ""

                this.contacts.push(newContact)

                this.newContactTab = false

            }

        },
    }

});