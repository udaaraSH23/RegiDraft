/**
 * @file fullModelArticles.ts
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * Static data module containing the full text of the Model Articles (First Schedule).
 * 
 * Design Patterns:
 * - Static Data Pattern: Separating large static content from components to improve readability and maintainability.
 * - Composite Pattern: Hierarchical structure of Sections -> Articles.
 */

export interface Article {
  number: string;
  title: string;
  legalText: string;
  plainEnglish: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  articles: Article[];
}

export const fullModelArticles: ArticleSection[] = [
  {
    id: 'A',
    title: 'A. SHARES',
    articles: [
      {
        number: '1',
        title: 'Issue of shares',
        legalText: `(1) Subject to articles 1 (2) and 1 (3), of these articles, the board may issue such shares to such persons as it thinks fit in accordance with section 51 of this Act. Where the shares confer rights other than those specified in subsection (2) of section 49 of this Act, or impose any obligation on the holder, the board must approve terms of issue which set out the rights and obligations attached to the shares as required by subsection (2) of section 51.
(2) Before it issues shares, the board must decide the consideration for which the shares will be issued. The consideration must be fair and reasonable to the company and to all existing shareholders.
(3) Where the company issues shares which rank equally with or prior to existing shares, those shares must be offered to the holders of the existing shares in a manner which would, if accepted, maintain the relative voting and distribution rights of those shareholders. The offer must remain open for acceptance for a reasonable time.`,
        plainEnglish: 'The Board of Directors has the power to issue new shares. However, they must set a fair price. Crucially, existing shareholders have "pre-emptive rights"—meaning new shares must be offered to them first, so their percentage of ownership isn\'t diluted without their chance to buy in.'
      },
      {
        number: '2',
        title: 'Calls on shares',
        legalText: `(1) Where a share imposes any obligation on the holder to pay an amount of money —
(a) on a fixed date, the holder must pay that amount on that date;
(b) when called on to do so by the board, the board may at any time give written notice to the holder requiring the payment to be made within a specified period of not less than twenty working days, and the payment must be made in accordance with that notice.
Any amount not paid by the due date shall carry interest at a rate fixed by the board not exceeding ten per cent per annum, accruing daily. The board may waive payment of interest.
(2) Joint holders of a share are jointly and severally liable for any payments to be made under paragraph (1) of this article.`,
        plainEnglish: 'If shares are not fully paid for upfront, the company can "call" on shareholders to pay the remaining amount. If they don\'t pay on time, the company can charge interest (up to 10% per year).'
      },
      {
        number: '3',
        title: 'Distributions',
        legalText: `(1) The company may make distributions to shareholders in accordance with section 56 of this Act. Subject to paragraph (2) of this article, every dividend must be approved by the board and by an ordinary resolution of the shareholders. The board must be satisfied that the company will immediately after the distribution, satisfy the solvency test. The directors who vote in favour of the distribution must sign a certificate of their opinion to that effect.
(2) The board may from time to time approve the payment of an interim dividend to shareholders, where that appears to be justified by the company’s profits, without the need for approval by an ordinary resolution of the shareholders. The board must be satisfied that the company will immediately after the interim dividend is paid, satisfy the solvency test. The directors who vote in favour of the interim dividend must sign a certificate of their opinion to that effect.
(3) The company is deemed to have satisfied the solvency test if—
(a) it is able to pay its debts as they fall due in the normal course of business; and
(b) the value of its assets is greater than the sum of the value of its liabilities and its stated capital.`,
        plainEnglish: 'This covers dividends (profits paid to owners). Before paying any dividend, the Directors must sign a certificate stating the company passes the "Solvency Test"—meaning the company can still pay its debts and its assets are worth more than its liabilities after the payment.'
      },
      {
        number: '4',
        title: 'Share register, share certificates and transfer',
        legalText: `(1) The company must maintain a share register, which complies with section 123 of this Act. The share register must be kept at the registered office of the company or at any other place in Sri Lanka, notice of which has been given to the Registrar in accordance with subsection (4) of section 124 of this Act.
(2) Where shares are to be transferred, a form of transfer signed by the holder or by his legal representative shall be delivered to the company. The transfer must be signed by the transferee if the share imposes any liability on its holder.
(3) The board may resolve to refuse to register a transfer of a share within six weeks of receipt of the transfer, if any amount payable to the company in respect of the share is due but unpaid. If the board resolves to refuse to register a transfer for this reason, it must give notice of the refusal to the shareholder within one week of the date of the resolution.
(4) Where a joint holder of a share dies, the remaining holders shall be treated by the company as the holders of that share. Where the sole holder of a share dies, that shareholder’s legal representative shall be the only person recognised by the company as having any title to or interest in the share.
(5) Any person who becomes entitled to a share as a consequence of the death, bankruptcy or insolvency or incapacity of a shareholder may be registered as the holder of that shareholder’s shares upon making a request in writing to the company to be so registered, accompanied by proof satisfactory to the board of that entitlement. The board may refuse to register a transfer under this article in the circumstances set out in paragraph (3) of this article.
(6) Where the company issues shares or the transfer of any shares is entered on the share register, the company must within two moths complete and have ready for delivery a share certificate in respect of the shares.`,
        plainEnglish: 'The company must keep an official list of shareholders (Share Register). To sell/transfer shares, a specific form must be signed. The Board can refuse a transfer if the shareholder still owes money for those shares. It also handles what happens to shares if a shareholder dies or goes bankrupt.'
      }
    ]
  },
  {
    id: 'B',
    title: 'B. MEETINGS OF SHAREHOLDERS',
    articles: [
      {
        number: '5',
        title: 'Rules relating to meetings of shareholders',
        legalText: 'A meeting of shareholders may determine its own procedure, to the extent that it is not governed by these articles.',
        plainEnglish: 'Shareholders can decide how to run their meetings, as long as they don\'t contradict these written rules.'
      },
      {
        number: '6',
        title: 'Notice of meetings',
        legalText: `(1) Written notice of the time and place of a meeting of shareholders must be given to every shareholder entitled to receive notice of the meeting and to every director and the auditor of the company—
(a) not less than fifteen working days before the meeting, if the company is not a private company and it is intended to propose a resolution as a special resolution at the meeting;
(b) not less than ten working days before the meeting, in any other case.
(2) The notice must set out—
(a) the nature of the business to be transacted at the meeting in sufficient detail to enable a shareholder to form a reasoned judgment in relation to it; and
(b) the text of any resolution to be submitted to the meeting.
(3) An irregularity in a notice of a meeting is waived if all the shareholders entitled to attend and vote at the meeting attend the meeting without protest as to the irregularity, or if all such shareholders agree to the waiver.
(4) If a meeting of shareholders is adjourned for less than thirty days, it is not necessary to give notice of the time and place of the adjourned meeting, other than by announcement at the meeting which is adjourned.`,
        plainEnglish: 'You must tell shareholders about a meeting in advance (usually 10 working days for private companies). The notice must clearly say what will be discussed so shareholders can prepare.'
      },
      {
        number: '7',
        title: 'Methods of holding meetings',
        legalText: `A meeting of shareholders may be held either—
(a) by a number of shareholders who constitute a quorum, being assembled together at the place, date and time appointed for the meeting; or
(b) by means of audio, or audio and visual communication by which all shareholders participating and constituting a quorum, can simultaneously hear each other throughout the meeting.`,
        plainEnglish: 'Meetings can be in-person or virtual (video/audio calls), as long as everyone can hear each other.'
      },
      {
        number: '8',
        title: 'Quorum',
        legalText: `(1) Subject to paragraph (3) of this article, no business may be transacted at a meeting of shareholders if a quorum is not present.
(2) A quorum for a meeting of shareholders is present if the shareholders or their proxies are present who are between them able to exercise a majority of the votes to be cast on the business to be transacted by the meeting.
(3) If a quorum is not present within thirty minutes after the time appointed for the meeting, the meeting is adjourned to the same day in the following week at the same time and place, or to such other date, time and place as the directors may appoint. If at the adjourned meeting, a quorum is not present within thirty minutes after the time appointed for the meeting, the shareholders present or their proxies shall be deemed to form a quorum.`,
        plainEnglish: 'A "Quorum" is the minimum attendance required. Here, it means shareholders holding a majority (>50%) of the votes must be present. If not enough people show up, the meeting is rescheduled for next week.'
      },
      {
        number: '9',
        title: 'Chairperson',
        legalText: `(1) If the directors have elected a chairperson of the board, and the chairperson of the board is present at a meeting of shareholders, he or she must chair the meeting.
(2) If no chairperson of the board has been elected or if at any meeting of shareholders the chairperson of the board is not present within fifteen minutes of the time appointed for the commencement of the meeting, the shareholders present may choose one of their number to be chairperson of the meeting.`,
        plainEnglish: 'The Board Chairperson usually runs shareholder meetings. If they aren\'t there, the shareholders can pick someone else to run it.'
      },
      {
        number: '10',
        title: 'Voting',
        legalText: `(1) In the case of a meeting of shareholders held under paragraph (a) of article 7, unless a poll is demanded, voting at the meeting shall be by whichever of the following methods as determined by the chairperson of the meeting— (a) voting by voice; or (b) voting by show of hands.
(2) In the case of a meeting of shareholders held under paragraph (b) of article 7, unless a poll is demanded, voting at the meeting shall be by shareholders signifying individually their assent or dissent by voice.
(3) A declaration by the chairperson of the meeting that a resolution is carried by the requisite majority is conclusive evidence of that fact, unless a poll is demanded in accordance with paragraph (4) of this article.
(4) At a meeting of shareholders, a poll may be demanded by —
(a) not less than five shareholders having the right to vote at the meeting; or
(b) a shareholder or shareholders representing not less than ten per centum of the total voting rights of all shareholders having the right to vote at the meeting.
(5) A poll may be demanded either before or after the vote is taken on a resolution.
(6) If a poll is taken, votes must be counted according to the votes attached to the shares of each shareholder present and voting.
(7) The chairperson of a shareholders’ meeting is not entitled to a casting vote.`,
        plainEnglish: 'Voting is usually by voice or show of hands. However, shareholders with at least 10% of the voting power can demand a "Poll" (a formal count of shares). The Chairperson does NOT get a tie-breaking vote.'
      },
      {
        number: '11',
        title: 'Proxies',
        legalText: `(1) A shareholder may exercise the right to vote either by being present in person or by proxy.
(2) A proxy for a shareholder is entitled to attend and be heard at a meeting of shareholders as if the proxy were the shareholder.
(3) A proxy must be appointed by notice in writing signed by the shareholder. The notice must state whether the appointment is for a particular meeting, or for a specified term.
(4) No proxy is effective in relation to a meeting, unless a copy of the notice of appointment is given to the company not less than twentyfour hours before the start of the meeting.`,
        plainEnglish: 'If you can\'t attend, you can appoint a "Proxy" (another person) to attend and vote for you. You must submit a written form 24 hours before the meeting.'
      },
      {
        number: '12',
        title: 'Minutes',
        legalText: `(1) The board must ensure that minutes are kept of all proceedings at meetings of shareholders.
(2) Minutes which have been signed correct by the chairperson of the meeting are prima facie evidence of the proceedings.`,
        plainEnglish: 'The company must keep written records ("Minutes") of everything discussed and decided at meetings.'
      },
      {
        number: '17',
        title: 'Annual General Meetings (AGM)',
        legalText: `(1) Subject to paragraphs (2) and (3) of this article, the board must call an annual meeting of the company to be held —
(a) once in each calendar year;
(b) not later than six months after the balance sheet date of the company; and
(c) not later than fifteen months after the previous annual meeting.
The meeting must be held on the date on which it is called to be held.
(2) The company need not hold its first annual meeting in the calendar year of its incorporation, but must hold that meeting within eighteen months of its incorporation.
(3) An extraordinary meeting of shareholders entitled to vote on an issue may be called at any time by the board, and must be called by the board on the written request of shareholders holding shares, carrying not less that ten per centum of votes which may be cast on that issue.
(4) A resolution in writing signed by not less than eighty-five per centum of the shareholders entitled to vote on the resolution at a meeting of shareholders, who together hold not less than eighty-five per centum of the votes entitled to be cast on that resolution, is as valid as if it had been passed at meeting of those shareholders. The company need not hold an annual meeting if every thing required to be done at the meeting (by resolution of otherwise) is done by resolution and is in accordance with this clause.`,
        plainEnglish: 'The company must hold a big meeting for all shareholders (AGM) once every year, usually within 6 months of the financial year-end. However, if 85% of shareholders agree in writing, they can pass resolutions without holding a physical meeting.'
      }
    ]
  },
  {
    id: 'C',
    title: 'C. DIRECTORS AND SECRETARY',
    articles: [
      {
        number: '20',
        title: 'Appointment and removal of directors',
        legalText: `(1) The shareholders may by ordinary resolution fix the number of directors of the company.
(2) A director may be appointed or removed by ordinary resolution passed at a meeting called for the purpose or by a written resolution in accordance with paragraph (4) of article 17. Unless the company is a private company, the shareholders may only vote on a resolution to appoint a director if—
(a) the resolution is for the appointment of one director; or
(b) the resolution is a single resolution for the appointment of two or more persons as directors, and a separate resolution that it be so voted on has first been passed without a vote being cast against it.
(3) A director may resign by delivering a signed written notice of resignation to the registered office of the company. Subject to section 208 of this Act, the notice is effective when it is received at the registered office or at any later time specified in the notice.
(4) A director vacates office if he—
(a) resigns in accordance with paragraph (3) of this article;
(b) is removed from office in accordance with the provisions of this Act or these articles;
(c) becomes disqualified from being a director pursuant to section 202 of this Act;
(d) dies; or
(e) vacates office pursuant to subsection (2) of section 210 of this Act, on the ground of his age.`,
        plainEnglish: 'Shareholders vote to appoint or remove Directors. A Director can also resign by giving written notice. Directors automatically lose their job if they die, are disqualified by court, or reach the age limit (usually 70, though this varies).'
      },
      {
        number: '21',
        title: 'Power and duties of directors',
        legalText: `(1) Subject to section 185 of the Act which relates to major transactions, the business and affairs of the company shall be managed by or under the direction or supervision of the board. The board shall have all the powers necessary for managing and for directing and supervising the management of the business and affairs of the company.
(2) The board may delegate to a committee of directors or to a director or employee any of its’ powers which it is permitted to delegate under section 186 of this Act.
(3) The directors have the duties set out in the Act, and in particular—
(a) each director must act in good faith and in what he believes to be the best interest of the company;
(b) no director shall act or agree to the company to Act, in a manner that contravenes any provisions of this Act or these articles.`,
        plainEnglish: 'The Board runs the company. They have the power to make most decisions. Their core duty is to act in "good faith" and in the "best interest of the company" (not just themselves).'
      },
      {
        number: '22',
        title: 'Interested directors',
        legalText: `(1) A director who is interested in a transaction to which the company is a party must disclose that interest in accordance with section 192 of this Act.
...
(9) A director must disclose all dealings in shares of the company in which he has a relevant interest, in accordance with sections 198, 199 and 200 of the Act.`,
        plainEnglish: 'If a Director has a personal interest in a company deal (e.g., the company is buying land from the Director\'s brother), they MUST disclose this conflict of interest officially.'
      },
      {
        number: '23-30',
        title: 'Meetings of Directors',
        legalText: `(Summary of Articles 23-30)
23. Procedure: Directors determine their own procedure.
24. Chairperson: Directors elect a chair.
25. Notice: At least 24 hours notice for meetings.
27. Quorum: Majority of directors.
28. Voting: One vote per director. Chairperson has a casting vote (tie-breaker).
29. Minutes: Must be kept.
30. Unanimous Resolution: Can pass resolutions in writing if all sign.`,
        plainEnglish: 'Directors meet to make decisions. They need a majority present (Quorum). Unlike shareholder meetings, the Chairperson DOES get a tie-breaking vote here. They can also pass decisions by signing a written document instead of meeting.'
      },
      {
        number: '32',
        title: 'Secretary',
        legalText: `(1) The company must at all times have a secretary.
(2) The board may appoint the secretary for such term and on such conditions as it thinks fit. The remuneration of the secretary shall be agreed to by the board and the secretary.
(3) The board may remove the secretary.
(4) The secretary may not be — (a) the sole director of the company; or (b) a corporation, the sole director of which is the sole director of the company.
(5) Where the Act or these articles require something to be done by a director and the secretary, it is not satisfied by the same person doing that thing acting in both capacities.`,
        plainEnglish: 'Every company MUST have a Company Secretary. The Board hires them. Crucially, if you are the only Director, you CANNOT also be the Secretary; you must hire someone else.'
      }
    ]
  },
  {
    id: 'D',
    title: 'D. ACCOUNTS AND AUDIT',
    articles: [
      {
        number: '33',
        title: 'Accounting records and Audit',
        legalText: `(1) The board must ensure that the company keeps accounting records which —
(a) correctly record and explain the company’s transactions;
(b) will at any time enable the financial position of the company to be determined with reasonable accuracy...
(4) At every annual meeting, the company must appoint an auditor for the following year in accordance with section 154 of the Act...
(5) The board must within five months after the balance sheet date of the company, prepare an annual report...`,
        plainEnglish: 'The company must keep accurate financial records. Every year, they must appoint an Auditor (an independent accountant) to check the books, and prepare an Annual Report for shareholders.'
      }
    ]
  },
  {
    id: 'F',
    title: 'F. MISCELLANEOUS',
    articles: [
      {
        number: '40',
        title: 'Insurance and indemnity',
        legalText: `(1) The company shall indemnify every director, auditor and secretary of the company for the time being against any costs incurred in the course of defending any proceeding that relates to any act or omission in his capacity as director, auditor or secretary, in which judgment is given in his favour or in which, he is a acquitted or which is discontinued.`,
        plainEnglish: 'If a Director or Officer is sued for doing their job, the company will pay their legal costs—BUT only if they win the case or are acquitted. It doesn\'t cover them if they are found guilty of misconduct.'
      },
      {
        number: '41',
        title: 'Private Companies',
        legalText: `(1) If the company is registered as a private company, this article shall apply to that company.
(2) The company must not offer any shares or other securities issued by it to the public.
(3) The company must at no time have more than fifty shareholders...
(4) The company may by unanimous resolution of its shareholders dispense with the keeping of an interests register...`,
        plainEnglish: 'This is the most important article for Private Limited companies. It forbids selling shares to the public and limits shareholders to 50. It also allows private companies to skip some paperwork (like the Interests Register) if everyone agrees.'
      }
    ]
  }
];
