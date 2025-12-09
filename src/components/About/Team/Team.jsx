import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../utils/utils';
import Loading from '../../loading/Loading';

const Team = () => {
    const [team, setTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // התחל טעינה
        setIsLoading(true);
        fetch(`${BASE_URL}/team`)
            .then(res => res.json())
            .then(result => {
                setTeam(result);
            })
            .catch(err => console.error("Error fetching team data:", err)) // שימוש ב-console.error
            .finally(() => {
                // סיום טעינה תמיד
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="bg-black">
            <div
                className="container mx-auto container-team"
                role="region"
                aria-label="Meet the Sequence team"
            >
                <h3 className="text-start text-bolder title-team" tabIndex="0">
                    Sequence Team
                </h3>

                <div className="team-list container mx-auto pt-3">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        team
                            .sort((a, b) => a.linkId - b.linkId)
                            .map(t => (
                                <article
                                    className="d-flex flex-column justify-content-start align-items-start gap-3 overflow-hidden"
                                    key={t._id}
                                    aria-label={`Team member: ${t.name}, ${t.title}`}
                                >
                                    <div className="team-img-container rounded-3 position-relative">
                                        <img
                                            src={t.img[0]}
                                            alt={`${t.name}`}
                                            className="rounded-3"
                                            // קריטי לתיקון CLS: הגדרת יחס גובה-רוחב 1:1 (180x180)
                                            width={180} 
                                            height={180} 
                                            loading="lazy" // אופטימיזציה נוספת
                                        />
                                        <div
                                            className="team-overlay-color rounded-3"
                                            aria-hidden="true"
                                        ></div>
                                    </div>

                                    <div className="d-flex flex-column gap-1 justify-content-start align-items-start">
                                        <span className="text-bolder" tabIndex="0">{t.name}</span>
                                        <span tabIndex="0">{t.title}</span>
                                    </div>

                                    <p className="text-start" tabIndex="0">
                                        {t.desc}
                                    </p>
                                </article>
                            ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Team;