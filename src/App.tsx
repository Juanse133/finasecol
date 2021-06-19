import React, { useState } from 'react';
import logo from './images/logo.png';
import instagram from './images/instagramLogo.svg';
import facebook from './images/facebookLogo.png';
import whatsapp from './images/whatsappLogo.png';
import email from './images/correoLogo.png';
import waButton from './images/whatsAppButton.png';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';

import './App.css'
import { useEffect } from 'react';

function App() {

  const [activeSlider,setActiveSlider] = useState(slider1);
  useEffect(() => {
    const interval = setInterval(() => {
      if(activeSlider===slider1){
        setActiveSlider(slider2)
      }else if(activeSlider===slider2){
        setActiveSlider(slider1)
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlider]);
  return (
    <div className="page">
      <header className="header">
        <a href="/" className="alogo">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="contactIcons">
          <ul className="ulicons">
            <li className="liIcons">
              <a href="https://www.instagram.com/finasecol/" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Contact Instagram" className="contactUs" />
              </a>
            </li>
            <li className="liIcons">
              <a href="https://www.facebook.com/Finasecol" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Contact Facebook" className="contactUs" />
              </a>
            </li>
            <li className="liIcons">
              <a href="https://wa.me/573002180502" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="Contact WhatsApp" className="contactUs" />
              </a>
            </li>
            <li className="liIcons">
              <a href="mailto:finasecol@gmail.com" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={email} alt="Contact Email" className="contactUs" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <span className="waButton">
        <a href="https://wa.me/573002180502" target="_blank" rel="noopener noreferrer">
          <img src={waButton} alt="Contact WhatsApp" style={{ width: "80px", position: "sticky" }} />
        </a>
      </span>
      <div className="slider">
        <img id={activeSlider} src={activeSlider} alt="Slider" className="sliderImages" />
      </div>
      <div className="content">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum tortor quis lorem convallis, non mattis risus interdum. Pellentesque eget accumsan ipsum. Aenean finibus leo in turpis sollicitudin, nec efficitur mauris consequat. In hac habitasse platea dictumst. Aliquam erat volutpat. Quisque sed aliquam magna, eget ultrices felis. Nullam ipsum justo, consequat a tortor blandit, ornare mattis justo. Nullam sit amet sem accumsan orci placerat dignissim. Cras porttitor metus non neque imperdiet cursus. Donec et elit vitae dui imperdiet congue.
        </p>
        <p>
          Aenean gravida lectus eget volutpat scelerisque. Cras condimentum pharetra lorem, ac dignissim nisi mattis eget. Praesent porta fringilla mi nec convallis. Vivamus feugiat metus nec mi tempus interdum. Morbi sapien tortor, posuere ac dolor ut, porttitor luctus erat. Etiam egestas velit nisl, aliquet faucibus odio efficitur interdum. Mauris elementum volutpat justo, vel auctor justo vehicula eu. Aliquam quis tellus ac justo efficitur volutpat. Sed sed tortor augue. Curabitur fermentum auctor enim, ut convallis magna tincidunt at. Sed convallis felis non cursus fermentum. Vestibulum mattis sit amet nisl at rhoncus. Nullam nec justo at lorem vulputate sodales.
        </p>
        <p>
          In semper eget elit nec porttitor. Nunc hendrerit eros vitae velit laoreet blandit. Sed enim ex, consequat at neque sit amet, sollicitudin interdum odio. Duis sapien sapien, consectetur sed porttitor id, congue a dui. Phasellus ultricies nibh eget nisl lobortis, id cursus metus congue. Nulla interdum velit fermentum, feugiat augue et, placerat tortor. Donec leo mi, tincidunt sed ullamcorper a, fermentum eget justo. Aenean varius dolor eu bibendum posuere. Proin interdum metus augue, et blandit tellus varius in. Sed porttitor malesuada elit et mollis. Mauris nec congue quam. Fusce pharetra diam in sapien commodo vulputate. Sed ac augue nulla. Morbi a varius nisi. Curabitur mollis lacinia sapien ut auctor.
        </p>
        <p>
          In egestas suscipit nisl ut cursus. Proin id sapien a mauris imperdiet mattis vel vulputate nunc. Fusce tempus magna sit amet orci fermentum, eget porta enim hendrerit. Donec bibendum felis vel ullamcorper gravida. Suspendisse vulputate neque vel felis eleifend tristique. Morbi aliquet, turpis vel consequat malesuada, turpis ligula molestie tortor, vitae pharetra nisi dolor ut turpis. Donec volutpat porta luctus. Pellentesque sem sem, suscipit id leo id, lacinia cursus ipsum. Duis dictum vestibulum risus, eget ullamcorper tortor feugiat ac. Ut ullamcorper viverra diam, eu luctus mi semper in. Aenean venenatis scelerisque ex vitae aliquet. Pellentesque eu nulla viverra, tincidunt ex quis, sodales risus. Suspendisse euismod turpis ex, a molestie purus tincidunt quis. Suspendisse viverra sapien non ligula tristique convallis eget eu massa.
        </p>
        <p>
          Quisque nec ipsum nec nisl imperdiet aliquet. Duis rutrum, libero ac tempor ornare, urna augue gravida felis, eget rhoncus ligula dolor eget sapien. Nunc eu quam at quam cursus euismod. Nunc in ante ut nisi dapibus placerat in a ipsum. Pellentesque auctor nibh bibendum, placerat ligula at, imperdiet purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus malesuada ligula in feugiat tempor. Donec suscipit lectus nunc, sit amet semper ante pretium sed. Nam nunc lacus, convallis in mauris ut, dapibus viverra lectus. In pretium, neque eu ultricies elementum, velit urna aliquet diam, eu sollicitudin ipsum nulla nec mauris. Aliquam accumsan aliquam nunc quis suscipit.
        </p>
        <p>
          Donec accumsan lacinia tristique. Donec at tempus justo, et tincidunt libero. Proin scelerisque purus eget rhoncus varius. Nullam blandit diam non rhoncus aliquet. Cras cursus vel augue non ullamcorper. Nulla nec nulla id eros sollicitudin interdum. Sed malesuada sem sed quam rhoncus mollis. Vivamus urna nulla, molestie nec sodales at, pulvinar ac nunc. Proin accumsan felis sem, vel faucibus mauris laoreet quis. Fusce mollis congue odio, ut ornare ex auctor vulputate. Vivamus auctor felis a iaculis pretium.
        </p>
        <p>
          Morbi sit amet semper sem, id commodo mi. Quisque venenatis justo ac massa ultrices condimentum. Quisque sit amet urna suscipit, mollis metus mollis, tempor dolor. Praesent gravida iaculis tortor, eu facilisis dui semper quis. Etiam vel tincidunt enim. Integer ac est sit amet ligula cursus egestas. Vestibulum imperdiet vulputate nisi, eu rutrum est maximus a. Ut dui diam, euismod in euismod at, accumsan vitae justo. Donec eget laoreet nibh, in auctor turpis.
        </p>
        <p>
          Aenean dapibus sapien sed euismod imperdiet. Pellentesque sed fermentum nulla. Curabitur faucibus consectetur ante, at cursus est imperdiet eu. Nullam mollis lacus eu neque euismod, et blandit metus lobortis. Quisque dapibus at sem in iaculis. Suspendisse potenti. Nam consectetur ut nisi ut posuere. Nullam suscipit, ex eget placerat accumsan, arcu mi tristique lectus, in pulvinar neque metus eget risus. Integer convallis eros et augue pulvinar, at dapibus dui tristique. Donec id consequat tortor, ut tempus arcu. Maecenas congue velit quam, a aliquam ex ornare at. Donec consectetur egestas consectetur. Nam et velit nec quam suscipit eleifend. In turpis ex, tristique in congue non, elementum at justo.
        </p>
        <p>
          Phasellus eu nunc quis lacus bibendum facilisis in id diam. Morbi sed porta ipsum. Etiam sed dui in ex euismod sodales vitae vel enim. Curabitur lacinia sollicitudin sem eu ullamcorper. Etiam feugiat vehicula leo, elementum vulputate justo maximus quis. Nullam vitae consectetur velit. Aenean et vestibulum leo, sit amet tincidunt ipsum. Nam eu turpis tempor, mollis enim ut, tristique mi. Suspendisse molestie rhoncus leo, sit amet semper nibh vehicula eu. Sed lectus justo, venenatis sit amet risus eget, dapibus viverra dui. Donec ipsum odio, dapibus eu posuere suscipit, sagittis sit amet nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <p>
          Mauris venenatis vel massa vel aliquam. Praesent eleifend mattis dui quis fringilla. Proin sapien quam, dapibus sit amet lobortis at, ultrices sit amet nibh. Maecenas fringilla ultrices mi, eu condimentum sem pretium vitae. Aliquam tincidunt mi quis venenatis tincidunt. Pellentesque tortor mi, placerat in leo sed, gravida porttitor nulla. Vivamus eget quam a ligula consectetur porta sit amet tincidunt velit. Proin viverra luctus ultricies.
        </p>
        <p>
          Curabitur placerat arcu magna, in rhoncus ligula imperdiet eu. Curabitur imperdiet ligula id nibh maximus condimentum. Nulla facilisi. Morbi justo tortor, facilisis id tellus id, porta interdum massa. Etiam pellentesque ex turpis, sit amet pharetra neque mattis et. Vivamus blandit suscipit ultrices. Quisque efficitur nec mauris suscipit dapibus. Nunc a purus et lacus fermentum rhoncus.
        </p>
        <p>
          Fusce ut quam ante. Duis nec pretium dolor. Phasellus orci turpis, accumsan ac quam non, faucibus fermentum tortor. Proin in erat vel mauris commodo gravida. Sed quis dolor blandit, bibendum dolor non, consectetur metus. Duis sapien ligula, egestas eget mi a, vehicula efficitur velit. Duis aliquet mauris ultrices turpis iaculis venenatis. Nullam sit amet scelerisque dui, at pulvinar libero. Vestibulum molestie mi non pharetra convallis. Pellentesque molestie mollis urna, eu pulvinar purus dignissim eget. Nunc tellus quam, tristique ut nunc eget, semper tempor nisl.
        </p>
        <p>
          Curabitur diam sapien, imperdiet a sem varius, bibendum blandit ante. Aliquam egestas accumsan consequat. Nulla in imperdiet lectus, ac tincidunt arcu. Sed sodales mi ac est aliquet, at viverra tellus lacinia. Duis semper, sem ut luctus aliquam, lorem velit finibus nibh, nec fermentum arcu lacus id leo. Proin ut arcu in velit ultrices sodales vitae ut tellus. Aenean aliquam ex eget ex maximus iaculis. Sed dapibus semper sem, vitae ullamcorper lectus suscipit eu. Sed egestas nisl ac magna congue placerat ut quis metus. Ut non viverra erat. Sed dapibus tempus risus nec vulputate. Donec blandit ac erat vitae porta. Ut fringilla magna augue, molestie venenatis eros mollis vel. Praesent suscipit interdum eros, in egestas quam vehicula id.
        </p>
        <p>
          Vivamus ut accumsan nibh. Nullam sagittis magna quis dapibus rutrum. Integer at gravida mi. Nunc ullamcorper erat at nisl porttitor, nec congue urna tincidunt. In suscipit commodo purus, finibus posuere lacus. Cras tincidunt nibh justo, a sagittis risus porttitor ac. Aliquam nec est venenatis, iaculis quam eget, volutpat massa. Phasellus maximus purus molestie risus hendrerit tempor. Phasellus non eleifend velit, et feugiat libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam porttitor varius tortor, ac varius massa aliquam eget. Nunc et dolor ac quam suscipit vulputate. Morbi at tellus nec nibh mollis aliquam. Donec ut venenatis tellus, at fermentum ante. Suspendisse odio nulla, tincidunt porta augue ac, malesuada dictum lectus.
        </p>
        <p>
          Sed maximus iaculis sollicitudin. Nullam et elementum augue. Sed dictum venenatis sem ullamcorper mollis. Proin vel ligula et lacus consequat pellentesque non ac neque. Ut augue velit, posuere ut turpis quis, sagittis volutpat nisl. Mauris arcu sem, eleifend quis ligula eget, ultricies sagittis risus. Quisque erat lacus, posuere nec consectetur nec, dictum vitae felis. Vestibulum non metus vel ligula tristique facilisis. Quisque vehicula orci eros, ac volutpat est pulvinar sed. Aenean mollis ipsum id aliquet condimentum. Sed consequat leo at lectus sagittis malesuada. Nunc convallis leo augue, non elementum lacus posuere at. Cras sodales venenatis arcu non sagittis. Nunc et lacus purus. Maecenas vel nibh fermentum, porta metus ac, tristique nibh. Donec iaculis mollis vehicula.
        </p></div>
    </div>
  );
}

export default App;
