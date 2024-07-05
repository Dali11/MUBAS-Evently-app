export const headerLinks = [
     {
          label: 'Home',
          route: '/'
     },
     {
          label: 'Create Event',
          route: '/events/create'
     },
     {
          label: 'My Profile',
          route: '/profile'
     }
]

export const eventDefaultValues = {
     title: '',
     description: '',
     location: '',
     imageurl: '',
     startDateTime: new Date(),
     endDateTime: new Date(),
     categoryId: '',
     price: '',
     isFree: false,
     url: ''

}

/* ZOOM MEETING */

export const SidebarLinks = [
     {
       label: "Home",
       route: "/zoom-meeting",
       imgUrl: "/assets/icons/Home.svg",
     },
     {
       label: "Upcoming",
       route: "/zoom-meeting/upcoming",
       imgUrl: "/assets/icons/upcoming.svg",
     },
     {
       label: "Previous",
       route: "/zoom-meeting/previous",
       imgUrl: "/assets/icons/previous.svg",
     },
     {
       label: "Recordings",
       route: "/zoom-meeting/recordings",
       imgUrl: "/assets/icons/Video.svg",
     },
     {
       label: "Personal Room",
       route: "/zoom-meeting/personal-room",
       imgUrl: "/assets/icons/add-personal.svg",
     },
   ];

   export const avatarImages = [
    '/assets/images/avatar-1.jpeg',
    '/assets/images/avatar-2.jpeg',
    '/assets/images/avatar-3.png',
    '/assets/images/avatar-4.png',
    '/assets/images/avatar-5.png',
  ];