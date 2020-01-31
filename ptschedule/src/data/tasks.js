const tasks = {
    aMonday: [
        {
            id: 0,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 1,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 2,
            time: '6:00PM',
            activity: 'Careers Lecture'
        },
        {
            id: 3,
            time: '6:15PM',
            activity: 'Module 1:1s to review B Week Thursday\'s project'
        },
        {
            id: 4,
            time: '6:15PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 5,
            time: 'end of night',
            activity: 'Completed module review forms'
        },
        {
            id: 6,
            time: 'end of night',
            activity: 'Clock out'
        }
    ],
    aTuesday: [
        {
            id: 7,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 8,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 9,
            time: '6:00PM',
            activity: 'Training Kit review'
        },
        {
            id: 10,
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            id: 11,
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 12,
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            id: 13,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aWednesday: [
        {
            id: 14,
            time: '5:00PM',
            activity: 'After Hours'
        },
        {
            id: 15,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 16,
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 17,
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            id: 18,
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            id: 19,
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            id: 20,
            time: '8:30PM',
            activity: 'Module retrospective form due'
        },
        {
            id: 21,
            time: 'end of day',
            activity: 'Clock Out'
        }
    ],
    aThursday: [
        {
            id: 22,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 23,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 24,
            time: '6:00PM',
            activity: 'Training Kit review'
        },
        {
            id: 25,
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            id: 26,
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 27,
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            id: 28,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aFriday: [
        {
            id: 29,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 30,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 30,
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 31,
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            id: 32,
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Monday\'s project'
        },
        {
            id: 33,
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            id: 34,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aSaturday: [
        {
            id: 35,
            time: '8:00AM',
            activity: 'Clock in'
        },
        {
            id: 36,
            time: '8:00AM',
            activity: 'TL Standup'
        },
        {
            id: 37,
            time: '9:00AM',
            activity: 'Take start of day attendance'
        },
        {
            time: '9:00AM',
            activity: 'Project Time'
        },
        {
            time: '9:15AM',
            activity: 'Module 1:1s begin to review A week Monday\'s project'
        },
        {
            time: '11:30AM',
            activity: 'Take end of day attendance'
        },
        {
            time: '11:30AM',
            activity: 'Standup Meeting'
        },
        {
            time: '12:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aSunday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Monday\'s project'
        },
        {
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bMonday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Training Kit Review'
        },
        {
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bTuesday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Thursday\'s project'
        },
        {
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bWednesday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Training Kit Review'
        },
        {
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bThursday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s for B Week Monday\'s project'
        },
        {
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bFriday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup (optional)'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Sprint Challenge'
        },
        {
            time: '9:00PM',
            activity: 'Sprint retrospective form due'
        }
    ],
    bSaturday: [
        {
            time: '8:00AM',
            activity: 'Clock in'
        },
        {
            time: '8:00AM',
            activity: 'TL Standup (optional)'
        },
        {
            time: '9:00AM',
            activity: 'Take start of day attendance'
        },
        {
            time: '9:00AM',
            activity: 'Sprint Challenge'
        },
        {
            time: '12:00PM',
            activity: 'Sprint retrospective form due'
        },
        {
            time: '12:00PM',
            activity: 'Clock out'
        }
    ],
    bSunday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Sprint Challenge'
        },
        {
            time: '9:00PM',
            activity: 'Sprint retrospective form due'
        }
    ],
}

export default tasks