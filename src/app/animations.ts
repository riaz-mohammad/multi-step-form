import {
  trigger,
  transition,
  query,
  style,
  group,
  animate,
} from '@angular/animations';

export const routeAnimations = [
  trigger('routeAnimations', [
   
    transition('registration => sender', [
      
      query(':enter, :leave',[
          style({
            position: 'absolute',
            top: '0%',
            width: '100%',
            height: '100%',
          }),
        ],{ optional: true }
      ),

      query(':leave', [
        style({
          top: '0%',
          opacity: 1,
          })
      ], {optional: true}),

      query(':enter', [
        style({
          top: '100%',
          opacity: 0
        })
      ], { optional: true }),
      

      group([
          query(':leave', [
            animate('500ms 200ms ease-out',
            style({
              top: '-60%',
              opacity: 0
            }))
          ], { optional: true }),
        

          query(':enter', [
            animate('500ms 500ms ease',
              style({
                top: '0%',
                opacity: 1
               }))
          ], {optional: true})
      ])

    ]),




    transition('sender => receiver, receiver => confirmation', [
      query(':enter, :leave',[
          style({
            position: 'absolute',
            top: '0%',
            width: '100%',
            height: '100%',
          }),
        ],{ optional: true }
      ),

      query(':leave',[
          style({
            left: '0%',
            opacity: 1
          }),
        ],{ optional: true }
      ),

      query(':enter',[
          style({
            opacity: 0,
            left: '100%'
          }),
        ],{ optional: true }
      ),

      group([
        query(':enter',[
            animate('700ms ease',
              style({
                opacity: 1,
                left: '0%'
              })
            ),
          ],{ optional: true }
        ),
        
        query(':leave',[
            animate('700ms ease',
              style({
                left: '-100%',
                opacity: 0
              })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),

    transition('receiver => sender, confirmation => receiver', [
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: '0%',
            width: '100%',
            height: '100%',
          }),
        ],
        { optional: true }
      ),

      query(':leave',[
          style({
            left: '0%',
            opacity: 1
          }),
        ],{ optional: true }
      ),

      query(':enter',[
          style({
            left: '-100%',
            opacity: 0
          }),
        ],{ optional: true }
      ),

      group([
        query(':enter',[
            animate('700ms ease',
              style({
                opacity: 1,
                left: '0%',
              })
            ),
          ],{ optional: true }
        ),
        query(':leave',[
            animate('700ms ease',
              style({
                left: '100%',
                opacity: 0
              })
            ),
          ],{ optional: true }
        ),
      ]),


    ]),

  ]),
];



export const stepper = trigger('stepper', [

  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX({{left}})'
    }),
      
    animate('1000ms 1000ms ease', style({
      opacity: 1,
      transform: 'translateX(0px)'
      
    }))
  ], {
    params: {left: '0px'}
  })

]);