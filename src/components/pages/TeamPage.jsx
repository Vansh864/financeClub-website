import { useState } from "react";
import members from "../../data/members.json";

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

const MemberPhoto = ({ member, featured = false }) => {
  const [imageAvailable, setImageAvailable] = useState(Boolean(member.photo));

  return (
    <div className={`team-photo${featured ? " team-photo--featured" : ""}`}>
      {imageAvailable ? (
        <img
          src={member.photo}
          alt={`${member.name}, ${member.role}`}
          loading={featured ? "eager" : "lazy"}
          onError={() => setImageAvailable(false)}
        />
      ) : (
        <div
          className="team-photo__fallback"
          role="img"
          aria-label={`Photo placeholder for ${member.name}`}
        >
          <span aria-hidden="true">{getInitials(member.name)}</span>
          <small>Photo coming soon</small>
        </div>
      )}
    </div>
  );
};

const MemberDetails = ({ member, featured = false }) => (
  <div className="team-member__details">
    <p className="team-member__role">{member.role}</p>
    <h3>{member.name}</h3>
    {featured && (
      <p className="team-member__note">Leading our community forward</p>
    )}
  </div>
);

const TeamPage = () => {
  const [leader] = members.role.leader;
  const heads = members.role.heads;

  return (
    <div className="team-page">
      <header className="team-intro" data-reveal>
        <p className="eyebrow">
          <span aria-hidden="true">✳</span> The people behind the club
        </p>
        <h1>
          Meet the <span>team.</span>
        </h1>
        <p>
          A curious, driven crew building a more confident relationship with
          finance, together.
        </p>
      </header>

      <section className="team-leadership" aria-labelledby="team-leader-title">
        <div className="team-section-heading" data-reveal>
          <p className="eyebrow">01 / Leadership</p>
          <h2 id="team-leader-title">Guiding the way.</h2>
        </div>
        <article className="team-leader-card" data-reveal>
          <MemberPhoto member={leader} featured />
          <MemberDetails member={leader} featured />
          <span className="team-leader-card__spark" aria-hidden="true">
            ✳
          </span>
        </article>
      </section>

      <section className="team-heads" aria-labelledby="team-heads-title">
        <div className="team-section-heading" data-reveal>
          <p className="eyebrow">02 / Department heads</p>
          <h2 id="team-heads-title">Eight minds. One team.</h2>
          <p>Meet the people shaping each part of the Finance Club.</p>
        </div>
        <div className="team-heads__grid">
          {heads.map((member, index) => (
            <article
              className="team-head-card"
              data-reveal
              key={member.name}
              style={{ "--team-reveal-delay": `${(index % 4) * 75}ms` }}
            >
              <MemberPhoto member={member} />
              <MemberDetails member={member} />
            </article>
          ))}
        </div>
      </section>

      <p className="team-page__footer-note" data-reveal>
        More of our team coming soon <span aria-hidden="true">↗</span>
      </p>
    </div>
  );
};

export default TeamPage;
