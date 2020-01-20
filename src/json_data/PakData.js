export const data = [
    {
        title: 'First Draft',
        status: "Unpublished",
        author: "Hasan Sharif",
        permission: {
            lifePackAccess: true,
            lifePackPublish: true,
            lifePackDuplicate: true,
            lifePackEdit: true,
            lifePackDelete: true
        },
        sessionInfo: [{
            title: "Startup Session 1",
            permission: true,
            type: "SUS",
            blockInfo: [{
                title: "Startup Session 1 Block 1",
                promptInfo: [{
                    title: "1 prompt",
                    permission: {},
                    branchInfo: [
                        {
                            title: "Branch1",
                            permission: {}
                        },
                        {
                            title: "Branch2"
                        }
                    ]

                },
                    {
                        title: "2 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
            }]
        },
            {
                title: "Notification Generated Sessions 1",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "Notification Generated Sessions 2",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 2",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "User Generated Sessions 1",
                permission: true,
                type: "UIS",
                blockInfo: [{
                    title: "UIS 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }, {
                        title: "2 prompt"

                    }]
                }]
            }]
    },

    {
        title: 'Second Draft',
        status: "Unpublished",
        author: "Hasan Sharif",
        permission: {
            lifePackAccess: true,
            lifePackPublish: true,
            lifePackDuplicate: true,
            lifePackEdit: true,
            lifePackDelete: true
        },
        sessionInfo: [{
            title: "Startup Session 2",
            permission: true,
            type: "SUS",
            blockInfo: [{
                title: "Startup Session 1 Block 1",
                promptInfo: [{
                    title: "1 prompt 1",
                    permission: {},
                    branchInfo: [
                        {
                            title: "Branch111",
                            permission: {}
                        },
                        {
                            title: "Branch112",
                            permission: {}
                        }
                    ]

                },
                    {
                        title: "2 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch121",
                                permission: {}
                            },
                            {
                                title: "Branch122",
                                permission: {}
                            }
                        ]

                    }]
            },{
                title: "Startup Session 1 Block 2",
                promptInfo: [{
                    title: "2 prompt 1",
                    permission: {},
                    branchInfo: [
                        {
                            title: "Branch1",
                            permission: {}
                        },
                        {
                            title: "Branch2",
                            permission: {}
                        }
                    ]

                },
                    {
                        title: "2 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
            }
            ]
        },
            {
                title: "Notification Generated Sessions 1",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "Notification Generated Sessions 2",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 2",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "User Generated Sessions 1",
                permission: true,
                type: "UIS",
                blockInfo: [{
                    title: "UIS 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }, {
                        title: "2 prompt"

                    }]
                }]
            }]
    }

];
