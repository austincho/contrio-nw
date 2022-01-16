const myABS = {
    abs: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "contractModified",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_paymentAmount",
                    "type": "uint256"
                }
            ],
            "name": "paymentReleased",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "status",
                    "type": "string"
                }
            ],
            "name": "progressStatus",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "projectAccepted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "projectClosed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "projectCompleted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "projectCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "projectFunded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "projectIn_Progress",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "projectIn_Review",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "acceptContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "acceptReview",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "clientID",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "closeProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "freelancerID",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fundContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "payment",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMyAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "myAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_freelancerID",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_name_freelancer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_name_client",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date_endProject",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_promises",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_paymentAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "modifyContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "projectState",
            "outputs": [
                {
                    "internalType": "enum SmartContract.ProjectState",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rejectReview",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "releasePayment",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "requestProjectReview",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "startProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_status",
                    "type": "string"
                }
            ],
            "name": "updateProgress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
};