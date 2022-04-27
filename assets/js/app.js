const app = new Vue({ //  (option object)

    // proprietà
    el: '#app', // elemento radice

    // data object -> array-oggetti-ecc..
    data: {

        active: 0,

        textInput: "",

        search: "",

        contacts: [{
                name: 'Michele',
                id: "",
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        hours: "16:15",
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                id: "",
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        hours: "16:30",
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        hours: "16:30",
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        hours: "16:35",
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                id: "",
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        hours: "10:10",
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        hours: "10:20",
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        hours: "16:15",
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                id: "",
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                id: "",
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                id: "",
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        hours: "15:51",
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                id: "",
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                id: "",
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        hours: "15:30",
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        hours: "15:50",
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        hours: "15:51",
                        message: 'OK!!',
                        status: 'received'
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
                date: this.dataTransform,
                hours: this.hoursTransform,
                message: this.textInput,
                status: 'sent'
            }
            this.contacts[this.active].messages.push(newMessage)

            this.textInput = ""

            if (newMessage.message < 1) {
                this.contacts[this.active].messages.splice(this.contacts[this.active].messages.length - 1, 1)
            } else {
                const replyMessage = {
                    date: dataTransform,
                    hours: hoursTransform,
                    message: "ok 😉",
                    status: 'recieved'
                }

                setTimeout(() => { this.contacts[this.active].messages.push(replyMessage) }, 1000)

            }

        },


        /*  // prova per prendere le ore
         hours(i) {
             this.contacts[i].messages.date.substring(11, 5)
             console.log(this.contacts[i].messages.date.substring(11, 5))
         } */
    },

    computed: {
        filteredChat() {
            return this.contacts.filter(message => {
                return message.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },

    },

    // mounted function -> carica da subito / mounted: function(){}
    mounted() {},

});