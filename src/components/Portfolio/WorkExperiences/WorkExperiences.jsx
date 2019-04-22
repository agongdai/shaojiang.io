import * as React from 'react';
import { Card, CardContent, CardHeader, Grid, Typography, } from '@material-ui/core';

const styles = require('./work-experiences.less');

const jobs = [
  {
    company: 'Toptal.com',
    companyLogo:
      'https://bs-assets.toptal.io/blackfish-assets/public/base/images/logo/big_fec205.png',
    url: 'https://www.toptal.com',
    jobTitle: 'Senior Front-end Developer',
    location: 'Remote',
    period: 'May 2016 - Present',
    description: (
      <ul>
        <li>
          {' '}
          - Work on a lot of React/Redux projects. Meanwhile using Webpack, D3,
          TypeScript, Mobx, and many more.
        </li>
        <li>
          - Maintainer of <a href="https://www.tinymce.com" target="_blank">TinyMCE</a>.
        </li>
        <li>
          - Refactor popular <a
          href="https://chrome.google.com/webstore/detail/priceblink-coupons-and-pr/aoiidodopnnhiflaflbfeblnojefhigh?utm_source=chrome-ntp-icon&gl=US"
          target="_blank">Chrome/FireFox extension PriceBlink</a>.
        </li>
        <li>
          <div><strong>Projects:</strong></div>
          <ul className={styles.moreProjects}>
            <li>
              <a href="https://www.tiny.cloud/" target="_blank" title="Tiny" alt="Tiny">
                <img className={styles.moreProjectsIcon} src="/public/images/logo-tiny.png"
                     alt="Tiny" />
              </a>
            </li>
            <li>
              <a href="https://travelflan.com" target="_blank" title="TravelFlan" alt="TravelFlan">
                <img className={styles.moreProjectsIcon} src="/public/images/logo-travelflan.svg"
                     alt="TravelFlan" />
              </a>
            </li>
            <li>
              <a
                href="https://chrome.google.com/webstore/detail/priceblink-coupons-and-pr/aoiidodopnnhiflaflbfeblnojefhigh?utm_source=chrome-ntp-icon"
                target="_blank" title="PriceBlink" alt="PriceBlink">
                <img className={styles.moreProjectsIcon} src="/public/images/logo-priceblink.png"
                     alt="PriceBlink" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    ),
    portfolios: [
      {
        url: 'https://www.nuscenes.org/',
        icon: 'https://www.nuscenes.org/public/images/logo.svg',
        title: 'NuScenes',
        jobTitle: 'Senior Front-end Developer',
        description: 'nuScenes.org contains recent announcements, as well as key figures about the nuScenes dataset.',
        logoBg: 'dark',
      },
      {
        url: 'https://xchangerate.io',
        icon: 'https://xchangerate.io/public/assets/images/landing/landingLogo.png',
        title: 'XChangeRate',
        jobTitle: 'Senior Front-end Developer',
        description:
          'We bring you a unified interface to manage your trades across all major exchanges along with powerful metrics to increase profit.',
      },
    ],
  },
  {
    company: 'European Bioinformatics Institute',
    companyLogo:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAAB9CAMAAACyJ2VsAAAA51BMVEX///8AAABtq0lrqkZlpz1pqUPZ2dljpjpnqECioqLKysrHx8f8/Pz4+Pg8PDxgpTVtbW1eXl6xsbHo6OhYWFhlZWUdHR3aDyFTU1PT09N1dXWXl5cQEBAnJye+vr6NjY3u9erh7dr2+vSpzJbB2rTJ377p8uTa6dKZw4KHuWuw0J92sFXR5MiiyI3c6tSBtmNISEjD27bYAACAgIC31Kh6sluoqKiPvXWZw4OPj48uLi7i4uLZABWmy5IrKyvuo6jcHi7hTlj64eP98PL0w8fgQUv20tTtmJ/laHHncXnkWmTytrr65eZ/u9amAAATwklEQVR4nO1dbWObOBImvEQ0ISFttm/bNsXY2BhwXDc4dtN6b/f2bu9ub///7zmYGQkkgw15o9fwfGhtyxaKHjQaPRoNmtbjQRCs5+Go60b0KMOfM8uwWOx33ZAeBUJbz2FPu25ID4FLV0ewpOum9OBITSLFTrtuSg+OyOakzLpuSg+OgBEp5qLrpjx1XM7m0wj8LZ+PFOZBySSaBV6HLXu6GDLbsMx4kr9OXCOjxHBhoPgrZtum1a9aHh8jNFkWrk2S2GWujr7XHMaN4fae2GPDjw2a24fw3hkHAwdeEVu6oXfZvieJMfeCDXXBuLKoxB100rInDLFeNJZKCR9COgs6adkThscdLmullBQjZdxJy54eJtE6RavE+97E8ZAMVxuc2RdiToE55jIKZ/2QeUD4a9O2TDvKX48NYIWF+RtnxmzLZiHQMC17X0M7L1h5nbX5h0eIszsDhWs8dU1mR8DDBkeHCQz5K9e2mQ7DI6UC1cb1uC9MhO7o5W8zLziBF9pAqMQT/GI6XEDJWKdZn/X6ywNhKNQUZZIYcbZMRSVOBI29UvlACLlfhbNKgVqVWLBlhY/XzKcF0ffqXtZCqMSK4FUYvOHjNfMpwJlE6QS9W+piw/Dyt95iGCE7YtHCYGniR+F0BiVCjDETrCqlqnrcCeN55ku5U+jtGUNnF8ZDoDObO7sjUIl1F8zaIDatzA3ewJcYFDAwa+OVa9ps3qsvd4VvwURiweBwhmbWqwbM5hPsbnsOd/4oY4hZOM3rOPUQdXFeAI6zv4QBZeleJ3/JD4Q1WSZ7DW8Ho2GAJmrODRMy4SVRgrKK2LBnIOp7kwh/oQ2pwO4n/TtCiMG6PBcIlbhe+2KX0ueCRqMPD7sbfL4s1F25Jyfc4dqhEss+mqcL9Erl3cD7XjeUkVKrEq+FSuxJn/vLfqTcBZnrOiLbw40R9b2fjC4xVkKdU4KUYiUSGlzWHOu6HCVIAp+eqKrSRXrsR+YFm6aLzq6HTpaBK5CRzUzaile8LzNzslCo1NYwuiwTfpHErsmQOA/dMsMaqxfpsRfkBdu0HxIzy2IxEBG5uE4B6Utep+jFOkWLDJNZuBxJkDoXFvSTJbN5VZ6JF4kf+6/7P0XIvWCURvzFbL0AAzSwuSeGzm6wSVEV9vjMQ5uN4wlFUYgVPcrHfpBV5eFF+B5Zr780gcO9p61wlGIFMpELFkIlbqp9+cJ564dKE3h1XnADldhSVOJF3WpmXFzk/v+CHxAO73rdUkpusZ/CB4Sq6TtipPTRYY0w5V4wySH+ZIJDRsRxoyumTUYkoIidR5fs2oC2JMdiITmiqsg91rhH3WsuzTBwyQvG/pu5jLkzeI0hETqDCWKwzH1aLJD26DNfzGWkK0dYgEe8nGFe1dovX8TsF5LNkNimZZkG3vVLME0miClwtJGCVgYm9KqJAZIhRLOswOWawbix0BNb52HgbOnlr6dQlY0L+sDMLsL0XsdvCn8Urkd4C0em5LoG6zluXzncyFFIxCRaDVHrmvAVPdI12cxD/ApFtugm7LRoXhquF/2O123A53YjvrP2VajE21RcPNuJ8/w7J8eEOia/Uvlh8dHb4y0cfd3+5clRXvJ2X2ds43B3u4/qGnFc0YjGbWigEqsLjXqVWCyAtm3W84OdgKZ+5e8uahp7SuVvxCfOh8rqbr4cyr88h48/NegQBS92t/sLfOlTZdmHj0dyXfDpLycNripIMZWRIkhRo+6nghR5iVmoxBVbjy/bkPK8uqmH2+XOaXV9WZdIPYKkvNmqci/2kPIOvvRTbbl0e73KPzndQcqAb3kIm4Oarzam/cUiJAIXkn6ymMizEI0tf7IgN5gLznwHZhAEYmOlFSkH1W1+14aUg4Or0k+7IuXgZamuPaRsctcVO5svQVxQ2RMrK1ii1IgFdJIrYMxkuCvv20gXasaJnhUwqOuSlc0aqsQhGcV2pFTbL2ElmpFycFb8tDNSyiZzNylzuNcZ2qWRaxuGjf2d0tFGIGjEcp82RkmfVGLgYWCahmG5sGbBw5A6hrZgVUiWZ0sqMZJyWgeYAoR5qrZfVcVIyvtn7wpcFTw9E9+7Iyk3Nc2+uYYvASmvvpQbUUwzxYDdSQq3P7QKH2+WyxlugVgGze24/ktXM3R2PWGxKO5rGody3BfOL+NZVhXO8lyKJusHpLzf3QFFrx9U+V/Cem2TIn/RueC8nPOP7kjK0e4vASnqDH7xhhohfI5dpDixcF2VEqESu6pKXHeOvlYldgpXG943J+V9/s+LiuLi5ttDiiYI/MLfPwIpH87Vjy+UobKLlEIlZkpJoRIrumP7WGJVJW5MyvuXNd0HpW8+NSNFu4L++Im/7YQU7Rmywt/uIkVsdeimUjLjfa8OiFFdbhYRda9q+sVFDHjffKRc1NgvuPnfPW9IyjkMuFe8o7ohBVcmB5yGneZrqXjB2pgWe4GywehdDtB5UlXiy0WEbvBYxIAt5KqEq01DqDkph2+q7Rd0/9efGpJCxq5jUq6kSWXnRJ9IXrAW6Yalwwhw5tjHJkRLeisj86DQGZiRGAySix/mwa0YXiFUYri107wqnNlJITMocUgLUq4r+w8KP2lvmpJy9j2QgvaLKyu7XeKha+U+LfbeKleDDRSD89Btw2LTfBR4sQ2dCs6uH7qgEqPADzbLwFEzywosNvfy1yFWhWLZwswKTEpS0YKUtyfSmOdA69WclJ+/H1K4DLZn8Zis4uUKxwnPH4GrCz9axZQqkkdx4SEHLRiuNrgfyY0c+VWTYeY4wzjhPhptT46jcJ16dMUmpLyl+6rSfqH1ak4KfFG4qZ2aL/5ur8zi85mUq4giOpWW4B5XuLZU4rDuHP20ztXW2pFSZb/Q93Iak3ICSqVY03dECjTilL/bSwpHSSWWHZ5CJZ4rP6lViUVBRSxxG1Kq7BdZr8akALGFXNMNKcfwY6ErNCalUImZTMqglpS63CxidV+rEjckBf9I2X6R9WpKylelAzohBUdr4d3vI8Ufj8lMxYp/7FFBkcWIr0D4fstIzjih+QMPC1SVOLuIuGArUqAnpM0Pbr2akeK8eMWrIuwh5eTorQwhjdyBlIsP8mjdR0qaLVWWOJ8L/xhm8cEqtuIQ+pI2dw2Dy13L6RB5wXxf9Atvnf1iihIz19RodzgWF+GkHFaD2ilI2bZf3HrVkPK1XNsRlyRLY20PKWhnSjjltzeScl3dbk4DknJcLnr7kVShQhTdQ8oqDwA2MMEH+ccYwBLYlqEbNkQ7ODOWFdgGdv3cNAzDRMnYm7p5shBMSxHb2S8sG74VmVAVONHOFC8yK5FShyOFFNynvC61GLr5vI6USnwq3957SDna+rFMSg24qlUv3d+UNyF2ksIDHCjkLvOP45Wk+Vq4FAxWyynKx9oKB4dFhikYzlKpwMC5PVkt41UgXyS5BSmq/ToUXdqYlFNpQ7gjUt5LO/LNVGLhBdN0ISQuWusLx3lSlyx6INSySK7K0eW5qgkpR4IUB14VRvpL/hYMQfORcnBWil3oaqQcPC/dGzsFyVqVWMSpqNGpRbJoJcg4EILkWi5Qpeh2pODXC/slrFcbUvi+YI59E/1XBeJ+uCspBwcfxVVupxLXklJI98q2SQNS8CJIylklXtLdVCIFpGJhv8CuoQxfTcq7jyWcPRc7L4KVO7rEP1W3m981QMr7qy/lRrwUjWi0n+KoXrDmefi/2MuiFYjjkTEqkkVT5Lfv4fguzBfRyH8hLkIhe01c4hIpKHrz+7WwXg1d4sMr6hDugN2RlD3BWpU7j87Xj++xEdwB2znR04Y7nyCSaRxPobP9GIeKjeGp6VSPUSHjHoBh4T7xaqlPU3jJJ/rYk6sqNLXSRN+ClJflv+amYKjpiv4Qb9QP1AXdrOjPya5RI3a7xGtmCC9Y26BLDK7rRLdzzxcig/0VfMuGlUYCh+UM9NeC3Fc22By0ZPCVba7jF1VpIfycOwBtSSnbr7clIhoLkido2MjCdKR90a4O7UrvWTwu5tkdTeNEWjyOw2U838AYoJ0SwwJTNpjqTJ+DWE9HVylk2B/O4yUuN/lhFdq3LF2kGSnHZVNRsl9fSr3bmBSimL7aFSl43Vf4Zq/2xW2/pvrHfLYQQaiUH0QbD8ZYIo4WUaCrmHlUmaW4yC1IOSvsV8l6tSAFXTbaEO6KFHLMkIjbCJJyLHG9IDl/KJVYIgXegOpdtl5tSCnvPXZGSnnv8SFJWT4KKYX9KluvNqR8hBpwBdkZKbiFcAyv929ycQqUTS7n979+hxfFJhcPHuK/mCnmy+dWaqqqxJ64yi1Igf3cfKHxS8l6tSHl6v+MlEm4XK5xLcLXJhgu+cdv3z6//vOv/OWMJ4qC2d2JpvEKH6bC4/HxNKO/1l0bVWJlOziNXRbzWKX2pHD7JVmvNqQ8/x7MFw5XXB3vJiVCLxj7jiRj2PT97+dvr1+//vb6Dy0/AwRhEBi77c1Z7t/GJOrnBXiKbqzn4d4WLirX5cAJVIndskrcihSNbnTJerUgxQH/4Ab7oDNSoBG0S7+TlIB7wThW0jgzYUDQX68R3/6Z/9IfZp8vcd7gKjHOL0msWzqeNyWTRbsuo6yqGLkmj1p3my8eL2RSrtB+wVaR+Euak4K10VGErkjBAJ0bfNMyGI8m5r99JlY+/0EFHv6fqCqxN1BllkiuqlIlbkcKLDRO35a6VmuzeMR7lHSWbhePpEzcTpD88xsn5V9yQb1KzOtSY4krBcl2pKD9OpOsV/NoFox5v+lUZnHoUGEDmcWr84K1f9eRUhvg3U66b0kKVxXLO8PNSDm5Ji2Qb/x1cBRCc17QgUx+S+00X3pdfNaW+eIoUlEo+UG2VGJxkSqVuB7QXSopYuupdEatmpTyoaF3785u+A/FXgaScnp8UQHlzKqMPSe58HbBQ0MfpUb8LHZ6ROt3TvRD+dDQYL2M0T/+/VccKt9+gxkjCeP5xstfCZUY80fkehft+ortYPjeYBYv17hrmVZM9C1J0XhpKQKi1SZXcYjqfMe3vmg70JyUOhR31G6XmJJM4D2cYmAx3On/QJf417/nb2Z5gW1jmjw6dwdMTJgtjtd5sQkuMXxrhAUUo4yuNu2K3YqUj+W/vD0ppaCFXaQU+5MPQUrjaBZtk58Rxe7i2+8Yrv3Xn58/f/vPCZJFzq6XvxvEzKScHj6pxLiC0YY6s1fgc/GDqBR9PIoZW0oqcT2qScFICumEbXNSrsp/fVek/Fye/ffJLM4lj27c8o9RZSmpxDS3exPydpUj24X+sqUSl2Iud45w2jnZIoXsVzlWEnxMcUBLc36pru/5Czne88HMVxE4sI031zIB8OFNK0GycXKDQiVukdzg8PhoBzCxx/mLHOVGH+UfXJcb9uLZ9fWzkl26eLGN423n9OTq5zqcVZ2vFDjf2e6jI2jbcUUjLrYbcZ23XblbKnGLZNGFSiy7YjvTgPRoA6Mmy822SsxRlzDHmRo1NPZogvFwPo08eClSS+G0HWymQ7RK5Ozy8XCZhpR69VJOLTVIwwgLRGopyuI6WvfPGmyOBWaGwB6TkrBNM6fWdvHII6Z+Jpl3BsfrQnoNnDBKjWcW5+4YVoWrHDMv6JOwNQS/1ekkFuQYnEFHrsrpCv2Vy1xaYA6ldIULSFfo5S/lRwpCVRuoSsmJ2GMP5rICkrGE6e2L3KmU2NOf0H2+ndiTMhqJyZ1P+peXNDXxbUhbEcV6VMLh6wzdVkrap8AVPpq9qblInwK3Eby6Y463SBY96pNF3w8KlVi9icVafeuRgu3TqouR0qdVb4SZnPXJi1aroZe/GvBHCpLmu5muMGLYkyO/nVE43WCQsZhTEqpqGtFpIquarR7V8HVgBb1gLbDyBwTiKbph+VEdkZ2njIih80mdRBFzHOfZi3E1ElASNpjOEx2qgtE0RtnS6qeUhvBWRdLuMXddYQykZi4GUxg3ThaYkC1lzDZJF46lRwpaWYE7hPTSFiXtBhdtsHSzAnScezTBOKBnORWJ79E/9oIU8xMVR7aHVBAtlEcKooSZFYwoGZ5clZOkqZLMrUczCC/Jqnmk4HYK3LrkBsWD0ryHbfOPjnt9pGCvEt8TLOEfKypxbVr1uoQ5Tv/wzfvChvvHuCwcLyKcbcQDCOiY4zid0dTBI/Nor9JLogUW8GWOGofUozUg1xp/vsbQznPegVs1MIAVDDLOOtzMvC+c80N6FjdQsdAz78uEw1/+nKryuvg7fih4YfE8xg11N8TKD+b5ExxR86V1Cmb4yBhipjuHBYz06HMvZP2jHe8J44Cc3Ut5Re8PRvwpT0I+RkPlJSNM+SlW9BTBMi6lt+9xLxC6o6p9jVprXz3uC6s7qMT989AeCA32U5SRIpJF9x7XQ6HYssLEa0FEOok6pwzSYYDysbrz2OPeEeKNT09GiXMNMvTy15L35Wf+mk2ypbxH3+MB4MOTA3HSpkefUxh4ZJsWX6fMKVk0pv6wIJrF66jFTwKTYRhhGPecr+gp9XM6S9F2iWTRKMwM0nCY1FXX414xrtt9L6XA7Zckj4wmKnE/uT8ymoyUXqF/ZIjnm/JHCg6CCYr7Ilm00WX7niYS9L7sJSxIEt01mU3Rx+Vk0T0eFQuD2TbDJ5xT0Ao96HGaOc6mle7+eY8HgbeYRejs+orDlUSzUe96dYwi2+pi/5d7PA5qVeIe3aHIzdJPJN8NLuty3ffoEGscKrYamNejQ2RecP6swXkf0PVdIQjjsHe9fiD8D3WgBeiSNHU4AAAAAElFTkSuQmCC',
    url: 'https://europepmc.org',
    jobTitle: 'Front-end Developer',
    location: 'Cambridge UK',
    period: 'June 2016 - June 2017',
    description: (
      <ul>
        <li>
          {' '}
          - A focused front-end developer of Europe PMC. The application
          provides 32 million research abstracts and 3.9 million full text
          papers, serving literature search for millions of users. It is based
          on Solr, Wicket, jQuery, and HighCharts.js.
        </li>
        <li>
          {' '}
          - Improved the site performance. Monitor the site usage through tools
          like Monitis, Kibana and Piwik.
        </li>
        <li>
          {' '}
          - Involved in some back-end development tasks, which utilizes the Java
          SpringMVC framework.
        </li>
      </ul>
    ),
    portfolios: [
      {
        url: 'https://europepmc.org/',
        icon: 'https://europepmc.org/template/images/epmc-logo-single.png',
        title: 'Europe PMC',
        jobTitle: 'Front-end Developer',
        description: 'Europe PMC is a repository, providing access to worldwide life sciences articles, books, patents and clinical guidelines. ',
      },
    ],
  },
  {
    company: 'RingCentral',
    companyLogo:
      'https://getvoip.com/uploads/RingCentral-logo-20151-1024x181.png',
    url: 'https://www.ringcentral.com',
    jobTitle: 'Front-end Developer',
    location: 'Xiamen China',
    period: 'Nov 2014 - May 2016',
    description: (
      <ul>
        <li>
          {' '}
          - Key front-end developer of Developers PortalWeb based on AngularJS
          1.x, grunt/gulp, SASS. Trained to follow Scrum agile work flow.
        </li>
        <li> - Responsible for developing most public pages.</li>
        <li>
          {' '}
          - One of the two developers to build the responsive mobile version
          from scratch. It was in AngularJS and React.
        </li>
        <li>
          {' '}
          - Dived into the AngularJS source code (v1.4.3) to get better
          understandings.
        </li>
      </ul>
    ),
    portfolios: [
      {
        url: 'https://developers.ringcentral.com',
        icon: 'https://developers.ringcentral.com/assets/images/logo_beta.svg',
        title: 'RingCentral for Developers',
        jobTitle: 'Front-end Developer',
        description: 'Integrate voice, team messaging, business SMS, and fax into your key apps and workflows.',
      },
    ],
  },
  {
    company: 'Genome Institute of Singapore',
    companyLogo:
      'https://www.a-star.edu.sg/Portals/71/Skins/GIS/assets/images/brand-logo.png',
    url: 'https://www.a-star.edu.sg/gis/',
    jobTitle: 'Bioinformatics Specialist',
    location: 'Singapore',
    period: 'May 2014 - May 2016',
    description: (
      <ul>
        <li>
          {' '}
          - Main researcher and developer on BASIC project (Browser for Applications in Sequencing
          and Integrated Comparisons).
        </li>
        <li>
          {' '}
          - Individual developer of PETA (Paired End Transcriptome Assembler written in C), a state-
          of-art de novo transcriptome assembler tailored to reconstruct full-length transcripts
          from
          large-scale RNA-seq data.
        </li>
      </ul>
    ),
    portfolios: [
      {
        url: 'http://biogpu.ddns.comp.nus.edu.sg/basic2/basic/public/zzz/hg19/',
        icon: '/public/images/logo-basic.png',
        title: 'BASIC',
        jobTitle: 'Front-end Bioinformatician',
        description: 'BASIC is an integrated system to efficiently store, process and visualize large column of Next Generation Sequencing (NGS) data.',
      },
    ],
  },
];

const WorkExperiences = () => (
  <div className={styles.root}>
    {jobs.map(job => (
      <div key={job.company} className={styles.job}>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <a href={job.url} target="_blank">
              <img src={job.companyLogo} className={styles.companyLogo} alt="" />
            </a>
          </Grid>
          <Grid item xs={5}>
            <h3>{job.company}</h3>
            <div className={styles.jobTitle}>{job.jobTitle}</div>
            <div className={styles.sub}>{job.period}</div>
            <div className={styles.sub}>{job.location}</div>
            <div className={styles.description}>{job.description}</div>
          </Grid>
          <Grid item xs={5}>
            <div className={styles.projects}>
              {job.portfolios.map(project => (
                <Card key={project.title} className={styles.project}>
                  <CardHeader
                    title={project.title}
                    subheader={project.jobTitle}
                  />
                  <div
                    className={styles.projectMedia}
                    style={{
                      backgroundColor: (project.logoBg === 'dark') ? '#222' : '#f5f5f5',
                    }}>
                    <a href={project.url} target="_blank">
                      <img
                        src={project.icon}
                        className={styles.projectIcon}
                      />
                    </a>
                  </div>
                  <CardContent>
                    <Typography component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    ))}
  </div>
);

export default WorkExperiences;
