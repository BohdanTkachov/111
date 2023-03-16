import { ModalViewModel } from './modalviewModel';

export class RoadMapViewModel {
  title: string;
  content: RoadMapItemViewModel[];
  modal: ModalViewModel;
  constructor() {
    this.title = 'BUILD MVP';
    this.content = [
      {
        header: 'Discover places',
        icon: 'icon1.svg',
        img: 'discoverPlaces.svg',
        description1:
          'As one of the main screens in Spotr, <br>it shows cards of places from chosen categories.',
        //'The 111 Minutes team did everything <br>to make discovering locations intuitive: <br>users can swipe down to stack a card <br> and add a corresponding place<br> to their current outing.',

        description2:
          'Animated cards make an app even more engaging and unique, as it was created specially for <br> Spotr, considering all the peculiarities of different locations.Also, on the Discover screen, travelers <br> can swipe up to toss the card to skip it.',
        //'Swiping left opens to discover preferences, <br> and swiping right shows navigation.',
      },
      {
        header: 'Recommender system',
        icon: 'icon2.svg',
        img: 'recommenderSystem.svg',
        description1:
          'To make planning trips easier, <br> 111 Minutes developers added a system that recommends locations according <br> to users’ requirements. ',
        //'Travelers can choose one or more place categories and distances to discover <br> the most appealing destinations.',

        description2:
          'We made the process of identifying <br> locations fast and easy, ',
        //'So Spotr provides better customer <br> service compared to its competitors.',
      },
      {
        header: 'Navigation',
        icon: 'icon3.svg',
        img: 'navigation.svg',
        description1:
          'Easy navigation is what our developers worked a lot on. ',
        //'We paid special attention to UX <br> and prototyping, so now this screen is completely intuitive and user-friendly.',

        description2:
          '111 Minutes specialists aimed to provide positive experiences to users and ensure a high level<br> of customer loyalty and satisfaction. ',
        // 'Thus, under each option, we added tips that give more additional information and make navigation even smoother.',
      },
      {
        header: 'Trip management',
        icon: 'icon4.svg',
        img: 'tripManagement.svg',
        description1:
          'As one of the main objectives of the app is to provide a positive customer experience, we focused on <br> building user-friendly features. ',
        //  'Now travelers can create trips for various purposes, such as shopping, hanging out, sightseeing, etc.',

        description2:
          'Users can load a saved outing if there was no time to go through the route, or if they want to do this one more time. ',
        // 'To make planning even more agile, there is also an ability to add and remove places or saved trips with the native iOS swipe left feature.',
      },
      {
        header: 'Geolocoations',
        icon: 'icon5.svg',
        img: 'geolocations.svg',
        description1:
          'The 111 Minutes team believes <br> that the unique appearance and style <br> of the product needs to be created <br> from the MVP stage. ',
        //  "This is why the map in Spotr was customized using the app's colors.",

        description2:
          'To plan a trip, users can search places by radius to get the nearest results, after which the app links them together and builds a route. ',
        //  'Additionally, Spotr allows customers to switch to Apple Maps or Google Maps and manage locations in several applications.',
      },
    ];
  }
}

export class RoadMapItemViewModel {
  header: string;
  icon: string;
  img: string;
  description1: string;
  description2: string;
}
