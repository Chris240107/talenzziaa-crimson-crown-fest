import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import crest from "@/assets/talenzziaa-19-crest.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Talenzziaa ’19 — Tolani College of Commerce" },
      {
        name: "description",
        content:
          "Discover Talenzziaa ’19: the 19th annual inter-collegiate fest of Tolani College of Commerce. The next chapter is almost ready to be revealed.",
      },
      { property: "og:title", content: "Talenzziaa ’19 — Tolani College of Commerce" },
      {
        property: "og:description",
        content:
          "Discover the 19th edition of Talenzziaa, the annual inter-collegiate fest of Tolani College of Commerce.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="fest-page min-h-screen overflow-hidden">
      <header className="fest-header">
        <a aria-label="Talenzziaa ’19 home" className="fest-brand" href="#home">
          <img alt="Talenzziaa crest" className="fest-brand__crest" src={crest.url} />
          <span className="fest-brand__copy">
            <span className="fest-brand__name">Talenzziaa ’19</span>
            <span className="fest-brand__college">Tolani College of Commerce</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="fest-nav">
          <a href="#story">The fest</a>
          <a href="#college">The college</a>
          <a className="fest-nav__reveal" href="#reveal">
            The reveal <ArrowRight aria-hidden="true" size={15} />
          </a>
        </nav>
      </header>

      <section aria-labelledby="fest-title" className="fest-hero" id="home">
        <div className="fest-hero__copy">
          <p className="fest-overline">
            <span className="fest-overline__rule" />
            The 19th edition <span className="fest-overline__dot">·</span> An inter-collegiate fest
          </p>

          <h1 id="fest-title">
            <span>Something</span>
            <span>extraordinary</span>
            <span className="fest-hero__final-line">
              is <em>nearly</em> here.
            </span>
          </h1>

          <p className="fest-hero__intro">
            Nineteen editions of ambition, creativity and campus spirit. The next chapter begins at
            Tolani.
          </p>

          <Button asChild className="fest-cta" variant="outline">
            <a href="#story">
              Discover the fest <ArrowDown aria-hidden="true" size={15} />
            </a>
          </Button>

          <div className="fest-hero__edition">
            <span className="fest-hero__edition-label">An annual college tradition</span>
            <span className="fest-hero__edition-number">XIX</span>
          </div>
        </div>

        <figure aria-label="The official gold-and-crimson Talenzziaa crest" className="fest-emblem">
          <div className="fest-emblem__orbit fest-emblem__orbit--outer" />
          <div className="fest-emblem__orbit fest-emblem__orbit--inner" />
          <img alt="The Talenzziaa gold-and-crimson crest" className="fest-emblem__crest" src={crest.url} />
          <figcaption className="fest-emblem__caption">
            <span /> Tolani College of Commerce <span />
          </figcaption>
        </figure>

        <a aria-label="Scroll to learn about the fest" className="fest-scroll" href="#story">
          <span>Scroll to explore</span>
          <ArrowDown aria-hidden="true" size={14} />
        </a>
      </section>

      <section aria-labelledby="story-title" className="fest-story" id="story">
        <div className="fest-story__marker">
          <span>01</span>
          <span className="fest-story__marker-line" />
          <span>The tradition</span>
        </div>

        <div className="fest-story__main">
          <p className="fest-kicker">A legacy of student spirit</p>
          <h2 id="story-title">
            Nineteen years.
            <br />
            <span>And a story</span> still unfolding.
          </h2>
          <p className="fest-story__body">
            Talenzziaa is the annual inter-collegiate fest of Tolani College of Commerce—a place for
            student talent, new connections and moments that stay with you. The nineteenth edition
            is taking shape now.
          </p>
          <a className="fest-inline-link" href="#college">
            A little about our college <ArrowRight aria-hidden="true" size={15} />
          </a>
        </div>

        <aside aria-label="The theme will be revealed soon" className="fest-reveal" id="reveal">
          <span className="fest-reveal__index">THE NEXT CHAPTER</span>
          <span aria-hidden="true" className="fest-reveal__asterisk">
            ✳
          </span>
          <h3>Good things are worth the wait.</h3>
          <p>The theme for Talenzziaa ’19 will be unveiled in its own time. Keep an eye out.</p>
          <span className="fest-reveal__note">The countdown to the reveal has begun</span>
        </aside>
      </section>

      <footer className="fest-footer" id="college">
        <div className="fest-footer__identity">
          <img alt="" className="fest-footer__crest" src={crest.url} />
          <span>
            <strong>Tolani College of Commerce</strong>
            <span>Home of Talenzziaa ’19</span>
          </span>
        </div>
        <span className="fest-footer__edition">The nineteenth edition <span>·</span> An annual tradition</span>
        <a aria-label="Back to top" className="fest-back-top" href="#home">
          Back to top <ArrowRight aria-hidden="true" size={14} />
        </a>
      </footer>
    </main>
  );
}
