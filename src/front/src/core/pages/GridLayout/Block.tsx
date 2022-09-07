import React from 'react'
import css from './Layout.module.css'
interface IBlockProps {

}


export const Block: React.FC<IBlockProps> = (props) => {

  return <div className={css.block}>
    Lorem ipsum dolor sit amet,
    consectetur adipisicing elit.
    Aspernatur assumenda blanditiis
    cupiditate distinctio dolore incidunt
    ipsam iste maiores quaerat quia quibusdam
    quisquam quod similique sint temporibus, vero, voluptatibus.
    Consequatur doloribus excepturi, impedit in ipsum maiores minus
    neque perspiciatis ratione rerum sapiente similique tenetur, voluptatibus.
    Adipisci aliquam aperiam beatae culpa doloremque esse et in itaque nisi optio placeat,
    repellat repellendus reprehenderit sint sunt temporibus vero. Ab accusamus asperiores at cum dicta, eos
    esse est excepturi magni maiores molestiae nemo, numquam pariatur praesentium qui quidem quis reiciendis
    tempore vel veniam. Aliquid doloribus ducimus eligendi iste magni perferendis quam quia quibusdam, sint sunt.
  </div>;
};
