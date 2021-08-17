/**
 * Switch
 * Syntax
    switch(condition) {
      case 1:
        break;
      case 2:
        break;
      .
      .
      .
      case n:
        break;
      default:
    }
 */

 i = 0;
 i = 'string', [], {}
 switch(i) {
   case (i < 3):
      document.write('Hey, It\'s 1');
      break;
    case (i > 4):
      document.write('Oops, it\'s something else');
      break;
    default:
      switch(i) {
        case Number:
          document.write('My Logic');
          break;
        default:
          switch(i<3) {
            default:
          }
      }
 }

 switch(i == 2) {
  case true:
     document.write('Hey, It\'s 2');
     break;
   case false:
     document.write('Oops, it\'s something else');
     // document.write('Hey, It\'s 2');
     break;
   // case (i == 3):
   //   document.write('Hey, It\'s 3');
   //   break;
   // default:
   //   document.write('Oops, it\'s something else');
}