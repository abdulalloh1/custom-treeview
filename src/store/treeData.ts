import { defineStore } from "pinia";

export const useTreeData = defineStore('treeData', {
    state: () => ({
        nodes: [
            {
                label: 'Root 1',
                id: `${ Math.random() }`,
                children: [
                    {
                        label: 'Child',
                        id: `${ Math.random() }`,
                    }
                ]
            },
            {
                label: 'Root 2',
                id: `${ Math.random() }`,
                children: [
                    {
                        label: 'Child 1',
                        id: `${ Math.random() }`,
                    },
                    {
                        label: 'Child 2',
                        id: `${ Math.random() }`,
                        children: [
                            {
                                label: 'Sub Child 1',
                                id: `${ Math.random() }`,
                            },
                            {
                                label: 'Sub Child 2',
                                id: `${ Math.random() }`,
                                children: [
                                    {
                                        label: 'Sub Sub Child 1',
                                        id: `${ Math.random() }`,
                                    },
                                    {
                                        label: 'Sub Sub Child 2',
                                        id: `${ Math.random() }`,
                                    },
                                    {
                                        label: 'Sub Sub Child 3',
                                        id: `${ Math.random() }`,
                                    }
                                ]
                            },
                            {
                                label: 'Sub Child 3',
                                id: `${ Math.random() }`,
                            }
                        ]
                    },
                    {
                        label: 'Child 3',
                        id: `${ Math.random() }`,
                        children: [
                            {
                                label: 'Sub Child 1',
                                id: `${ Math.random() }`,
                            }
                        ]
                    }
                ]
            }
        ]
    })
})