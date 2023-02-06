import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/stone.png"
          alt="An image for the hero"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Gabby</h1>
      <p>
        This is my blog about learning NextJS, I hope to learn even more with
        this blog.
      </p>
    </section>
  );
}

export default Hero;
