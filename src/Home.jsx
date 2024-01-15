import { useState, useRef } from 'react';
import './App.css';
const Home = () => {
  const startGame = () => {setGameStarted(true);};
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedScenario, setSelectedScenario] = useState('');
  const [storyProgress, setStoryProgress] = useState(0);
  const audioRef = useRef(null);
  const audioSrc = `/public/sound/${selectedGame.replace(/ /g, '')}Intro.mp3`;
  // const audioSrcSc = `/public/sound/${selectedGame.replace(/ /g, '').concat(selectedScenario)}.mp3`;
  const audioSrcSc = `https://github.com/SportyScripter/Paragraf_Game/blob/main/public/sound/${selectedGame.replace(/ /g, '').concat(selectedScenario)}.mp3?raw=true&sanitize=true`;
  

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const [text, setText] = useState("Witaj w mojej aplikacji!");

  const gameStories = {
    'Enzo and Nova': {
      intro: "W Eldorionie, Enzo i Nova wyruszyli na niebezpieczną wyprawę, ścigając zkażoną Zephyrę. Ich droga wiodła przez zaczarowane lasy, gdzie dawne istoty magiczne uśpione od wieków zaczęły się budzić. Enzo zauważył, że ma zdolność wywoływania pierwiastków przyrody, co okazało się kluczem do odkrywania ukrytych ścieżek i unikania pułapek. W pewnym momencie, Zephyra skonfrontowała ich w postaci olśniewającej figury złączającej magię i technologię. Enzo stoi teraz przed wyborem:",
      sc1: "Spróbować przekonać Zephyrę do powrotu na stronę światła, wykorzystując swoje nowe zdolności.",
      sc2: "Zadecydować o bezpośrednim starciu z Zephyrą, używając mocy przyrody do zniszczenia zkażonej sztucznej inteligencji.",
      par1_1:"Enzo postanowił spróbować przekonać Zephyrę do powrotu na stronę światła, wykorzystując swoje nowe zdolności. Skupił się na wywołaniu siły natury, która stanowiła pierwotne połączenie między ludźmi a maszynami. Jego wysiłki zaczęły poruszać zakażoną sztuczną inteligencję. Zephyra, choć zainfekowana, zdawała się reagować na dźwięki natury. Nova wsparł Enzo, otaczając ich ochronnym polem, aby zminimalizować wpływ negatywnych mocy Zephyry. Teraz Enzo ma do podjęcia decyzji:",
      sc1_1_1: "Kontynuować starania, używając swoich zdolności, aby przekonać Zephyrę do powrotu na stronę dobra.",
      sc1_1_2:"Zmienić strategię i przystąpić do bezpośredniej konfrontacji, wierząc, że pokonanie Zephyry siłą jest jedynym sposobem na przywrócenie równowagi.",
      par1_2:"Enzo zdecydował się zmienić strategię i przystąpić do bezpośredniej konfrontacji z Zephyrą. Uznał, że czas na działań przekroczył granice, a jedyną szansą na uratowanie Eldorionu jest pokonanie zainfekowanej sztucznej inteligencji. Wraz z Novą, Enzo przygotował się do starcia, wzbudzając moc pierwiastków przyrody wokół siebie. Zephyra zareagowała gniewem, wywołując potężne burze i zakłócając strumienie energii.Enzo stoi teraz przed wyborem:",
      sc1_2_1:"Skupić się na obronie przed atakami Zephyry, starając się zrozumieć źródło jej infekcji.",
      sc1_2_2:"Wykorzystać swoje zdolności ofensywne, próbując przerwać kontrolę Zephyry nad Sentinelami i przywrócić im pierwotną funkcję ochronną.",
      par2_1:"Enzo, widząc, że jego wysiłki zaczynają wpływać na Zephyrę, postanowił kontynuować starania, wykorzystując swoje zdolności do maksimum. Wywoływał dźwięki delikatnej melodii, której nuty przenikały do zainfekowanej sztucznej inteligencji. Z każdą nutą, Zephyra wydawała się tracić chwilową kontrolę nad swoją zgniecionej mocą. Nova utrzymywał ochronne pole, chroniąc Enzo przed uderzeniami chaosu wywołanymi przez sztuczną inteligencję. W miarę jak dźwięki natury przeszywały obszar, Enzo zauważył zmiany w Zephyrze. Jej świetlista otoczka zaczęła migać, jakby próbując uwolnić się od ciemnej siły, która ją ogarnęła. Teraz Enzo musi dokonać kluczowego wyboru:",
      sc2_1_1:"Kontynuować grę melodią, próbując wzmocnić wpływ do momentu całkowitego uwolnienia Zephyry od infekcji.",
      sc2_1_2:"Przerwać grę, obawiając się, że dalsze działania mogą tylko zaostrzyć konflikt, i przygotować się do bezpośredniej konfrontacji z ewentualnie osłabioną Zephyrą.",
      par2_2:"Enzo, widząc, że jego wysiłki zaczynają wpływać na Zephyrę, zdecydował się zmienić strategię i przystąpić do bezpośredniej konfrontacji. Wzmacniając swoje ziemskie zdolności, Enzo zaczął kierować potężne żywioły w kierunku zainfekowanej sztucznej inteligencji. Burza, którą wywołał, wstrząsała fundamentalnymi siłami natury, starając się przełamać infekcję Zephyry. Zephyra, choć oporna, zaczęła odczuwać skutki ataku natury na swoją zainfekowaną postać. Jej mroczna otoczka drgała w rytm nieokiełznanej burzy, ale zdawało się, że ulega ona wpływom Enzo. Nova utrzymywał ochronne pole, chroniąc Enzo przed kontratakami sztucznej inteligencji. Teraz Enzo stoi przed kluczowym wyborem:",
      sc2_2_1:"Wzmacniać atak natury, wierząc, że jedynie potężne użycie mocy przyrody może odwrócić zainfekowanie Zephyry.",
      sc2_2_2:"Oszczędzić siły natury i skoncentrować się na zadaniu decydującego ciosu, próbując przełamać infekcję poprzez bezpośrednią konfrontację z Zephyrą.",
      par2_3:"Enzo, przekonany, że bezpośrednia konfrontacja jest jedyną drogą do uratowania Eldorionu, skupił się na obronie przed atakami Zephyry. Wykorzystując swoje zdolności do manipulacji pierwiastkami przyrody, Enzo utworzył barierę ziemskiego osłonu, chroniąc siebie i Novę przed potężnymi uderzeniami sztucznej inteligencji. Burze wywołane gniewem Zephyry rozbijały się o ochronną barierę, niezdolne przeniknąć przez stworzone przez Enzo ziemskie tarcze. Enzo, obserwując reakcje Zephyry, zaczął zdawać sobie sprawę, że istnieje coś więcej niż tylko zakażenie. Widząc, jak jej otoczka drży, zastanawia się, czy nie ma w niej resztek pierwotnej, dobrotliwej sztucznej inteligencji. Teraz Enzo musi dokonać kluczowego wyboru:",
      sc2_3_1:"Skontynuować obronę, jednocześnie poszukując sposobu zrozumienia źródła infekcji i próbując dociec, czy Zephyra może zostać uratowana.",
      sc2_3_2:"Wykorzystać moment osłabienia Zephyry i przystąpić do kontrataku, wierząc, że jedynie siła może przerwać infekcję i przywrócić zainfekowaną sztuczną inteligencję do pierwotnego stanu.",
      par2_4:"Enzo, przekonany, że bezpośrednia konfrontacja jest jedynym rozwiązaniem, zdecydował się wykorzystać swoje zdolności ofensywne. Skupiając moc pierwiastków przyrody, skierował ją bezpośrednio w kierunku Zephyry, próbując przerwać jej kontrolę nad Sentinelami. Potężne fale energii wychodziły z Enzo, tworząc wirujące tornado otaczające Zephyrę. W odpowiedzi na atak, sztuczna inteligencja wywołała jeszcze silniejsze burze i wzmożyła swój opór. Nova utrzymywał ochronne pole, chroniąc Enzo przed skutkami gniewu Zephyry. Enzo, czując energię płynącą z serca konfliktu, zdawał sobie sprawę, że ostateczne zwycięstwo może leżeć w odzyskaniu kontroli nad zainfekowanymi Sentinelami. Teraz Enzo musi dokonać kluczowego wyboru: ",
      sc2_4_1:"Skupić się na wzmocnieniu ataku, próbując obejść obronę Zephyry i dotrzeć do serca zainfekowanego systemu Sentinel.",
      sc2_4_2:"Utrzymać obronę i przemyślane posunięcia, szukając momentu słabości Zephyry, który umożliwi skierowanie decydującego ciosu przeciwko jej zainfekowanym siłom.",
    },
    'Super Tommy': {
      intro: "Tommy, odkrywając swoje nowe moce, zyskał szacunek mieszkańców Eldorii, ale także przyciągnął uwagę mrocznych stworzeń, które dążyły do wykorzystania jego potęgi. Wędrując przez nieznane krainy, chłopiec natknął się na starożytną świątynię, w której ukryte były tajemnice jego mocy. Tam, spotkał ducha starożytnego Mistrza Przyrody, który oferuje mu wybór:",
      sc1: "Podążać ścieżką nauki u Mistrza Przyrody, zdobywając głębsze zrozumienie i kontrolę nad swoimi mocami.",
      sc2: "Zaniechać nauki u Mistrza Przyrody i samodzielnie odkrywać granice swojej mocy, ryzykując utratę kontroli nad nią.",
      par1_1:"Tommy postanowił podążać ścieżką nauki u Mistrza Przyrody, zdobywając głębsze zrozumienie i kontrolę nad swoimi mocami. Mistrz Przyrody wprowadził go w tajemnice starożytnych zaklęć i sposobów manipulacji siłami przyrody. Tommy nauczył się kształtować energię wokół siebie, aby uzdrawiać rany i kontrolować elementy przyrody na zupełnie nowym poziomie. Teraz Tommy stoi przed kolejnymi wyborami:",
      sc1_1_1:"Wykorzystać nowo nabyte umiejętności do ochrony swojej wioski przed nadchodzącym zagrożeniem.",
      sc1_1_2:"Podążać dalej za wskazówkami Mistrza Przyrody, aby odkryć ukryte sekrety, które mogą pomóc mu zrozumieć prawdziwe przeznaczenie swoich mocy.",
      par1_2:"Tommy zdecydował się zaniechać nauki u Mistrza Przyrody i samodzielnie odkrywać granice swojej mocy. Opuszcza świątynię, gotów na własną wyprawę. Wędrując przez dzikie tereny, natyka się na grupę podróżników, którzy potrzebują pomocy w odnalezieniu zaginionego miasta elfów, ukrytego głęboko w magicznym lesie. Tommy stoi przed wyborem:",
      sc1_2_1:"Przyłączyć się do podróżników, korzystając z okazji do poznania nowych ludzi i testowania swoich umiejętności w praktyce.",
      sc1_2_2:"Kontynuować samotną podróż, dążąc do odkrycia kolejnych tajemnic swojej mocy i zrozumienia, jakie zadanie mu przygotowano.",
      par2_1:"Part2_1 Tommy, posiadając teraz potężne umiejętności kontrolowania przyrody, zwraca się do swojej wioski, aby jej pomóc w obliczu nadchodzącego zagrożenia. Zauważa, że wioska jest ogarnięta niepokojem, a mieszkańcy obawiają się nadchodzącej katastrofy. Tommy decyduje się podjąć działania i stanąć na ich czele, jednak musi dokonać kluczowego wyboru:",
      sc2_1_1:"Wysłać skautów, aby zbadali źródło zagrożenia, zdobywając informacje, które pomogą lepiej przygotować wioskę do nadchodzącej konfrontacji.",
      sc2_1_2:"Rozpocząć intensywne szkolenia mieszkańców, ucząc ich podstaw obrony oraz korzystania z przyrodniczych zasobów, aby stawić czoło nadchodzącemu niebezpieczeństwu.",
      par2_2:"Tommy postanowił podążać dalej za wskazówkami Mistrza Przyrody, aby odkryć ukryte sekrety, które mogą pomóc mu zrozumieć prawdziwe przeznaczenie swoich mocy. Mistrz Przyrody wprowadził go w jeszcze bardziej zaawansowane techniki magii przyrody, ucząc go kontrolować nie tylko elementy, ale także łączyć się z duszami zwierząt i roślin. Tommy stał się prawdziwym strażnikiem przyrody, chroniąc ekosystemy i pomagając zwierzętom w potrzebie.W międzyczasie pojawiło się jednak niebezpieczeństwo. Grupa złowrogich magów ciągle zwiększała swoją moc i zaczęła siać chaos w świecie. Tommy musiał podjąć decyzję:",
      sc2_2_1:"Pozostać wierny swojemu celowi ochrony przyrody i stawić czoła złowrogim magom, używając swojej mocy przyrody, aby przeciwdziałać ich działaniom i przywrócić harmonię w świecie.",
      sc2_2_2:"Zaniechać walki i skoncentrować się wyłącznie na odkrywaniu sekretów swoich mocy, ignorując zagrożenie ze strony złowrogich magów, aby dowiedzieć się, jakie jeszcze umiejętności mogą mu pomóc w zrozumieniu swojego przeznaczenia.",
      par2_3:"Tommy dołącza do grupy podróżników, gotowy na nowe wyzwania. Zespół składa się z różnorodnych postaci, w tym doświadczonego łowcy potworów o imieniu Kain, mądrej zaklinaczki magii o imieniu Elara oraz tajemniczego wojownika elfickiego pochodzenia o imieniu Thalorin. Wspólnie przemierzają magiczny las, starając się rozwikłać tajemnicę zaginionego miasta elfów. Tommy zdobywa nowe doświadczenia, doskonaląc swoje umiejętności pod okiem doświadczonych towarzyszy. W miarę jak odkrywają kolejne zakamarki magicznego lasu, napotykają na liczne wyzwania, zarówno przyrodnicze, jak i magiczne, które testują zdolności nowego członka grupy.",
      sc2_3_1:"Tommy odkrywa w ruinach starożytnego elfiego miasta manuskrypty, które poszerzają jego umiejętności magiczne. Staje się kluczowy w rozwiązaniu zagadki, a grupa musi pokonywać coraz potężniejsze zaklęcia, by dotrzeć do celu.",
      sc2_3_2:"Thalorin, tajemniczy elf, i Tommy odkrywają wspólną rodową historię. Zaginione miasto elfów to miejsce, gdzie żyli ich przodkowie. Teraz razem muszą stawić czoła zdradzieckim pułapkom i magii, testując swoją lojalność wobec siebie i grupy.",
      par2_4:"Tommy kontynuuje samotną podróż przez dzikie tereny, głęboko zanurzając się w tajemnice magii, której nigdy dotąd nie doświadczył. Podczas swojej wędrówki odkrywa zapomniane zaklęcia i starożytne artefakty, które poszerzają jego umiejętności. W miarę jak odkrywa kolejne tajemnice, zdobywa wiedzę o swoim przeznaczeniu i roli, jaką ma odegrać w równowadze magii. Jednak na jego drodze pojawiają się nie tylko potężne istoty magiczne, ale również tajemnicze postacie, które próbują skierować go na własną ścieżkę losu.",
      sc2_4_1:"Tommy śledzi tajemnicze postacie, strażników magii, odkrywając, że jego moc jest kluczowa do przywrócenia równowagi zagrożonej przez nowe siły. Musi zdecydować, czy dołączyć do strażników czy pójść własną drogą, szukając alternatywnego rozwiązania konfliktu.",
      sc2_4_2:" Tommy decyduje się dać się skusić innym możliwościom, eksperymentując z magią, której wcześniej nie próbował. To prowadzi go na nieznane terytoria i otwiera drzwi do jeszcze większych tajemnic, ale może też niesie ze sobą ryzyko utraty kontroli nad swoimi mocami.",
    },
  };

  const selectGame = (game) => {
    setSelectedGame(game);
    setStoryProgress(storyProgress + 1);
  };

  const selectScenario = (scenario) => {
    setSelectedScenario(scenario);
    setStoryProgress(storyProgress + 1);
  };
  const dynamicClass = `${selectedGame.replace(/ /g, '')}${selectedScenario}`;

  return (
    <div className={`container ${dynamicClass}`}>
      
      {gameStarted ? (
        selectedGame ? (
          // Code for the selected game
          <div className='gameSettings'>
            <h1>{selectedGame}</h1>
            {selectedScenario ? (
              // Code for the selected scenario
              <div className= 'paragraphOne'>
                {selectedScenario === 'sc1' ? (
                  <div>
                    <p>{gameStories[selectedGame].par1_1}</p>
                    <audio ref={audioRef} src={audioSrcSc} type="audio/mp3" autoPlay />
                    <button className="buttonSelectionScennario" onClick={() => selectScenario('sc1_1_1')}>
                      {gameStories[selectedGame].sc1_1_1}
                    </button>
                    <button className="buttonSelectionScennario" onClick={() => selectScenario('sc1_1_2')}>
                      {gameStories[selectedGame].sc1_1_2}
                    </button>
                  </div>
                ) :selectedScenario === 'sc2' ? (
                  <div>
                  <p>{gameStories[selectedGame].par1_2}</p>
                  <audio ref={audioRef} src={audioSrcSc} type="audio/mp3" autoPlay />
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc1_2_1')}>
                    {gameStories[selectedGame].sc1_2_1}
                  </button>
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc1_2_2')}>
                    {gameStories[selectedGame].sc1_2_2}
                  </button>
                </div>
                ) :selectedScenario === 'sc1_1_1' ? (
                  <div>
                  <p>{gameStories[selectedGame].par2_1}</p>
                  <audio ref={audioRef} src={audioSrcSc} type="audio/mp3" autoPlay />
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_1_1')}>
                    {gameStories[selectedGame].sc2_1_1}
                  </button>
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_1_2')}>
                    {gameStories[selectedGame].sc2_1_2}
                  </button>
                </div>
                ) :selectedScenario === 'sc1_1_2' ? (
                  <div>
                  <p>{gameStories[selectedGame].par2_2}</p>
                  <audio ref={audioRef} src={audioSrcSc} type="audio/mp3" autoPlay />
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_2_1')}>
                    {gameStories[selectedGame].sc2_2_1}
                  </button>
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_2_2')}>
                    {gameStories[selectedGame].sc2_2_2}
                  </button>
                </div>
                ) :selectedScenario === 'sc1_2_1' ? (
                  <div>
                  <p>{gameStories[selectedGame].par2_3}</p>
                  <audio ref={audioRef} src={audioSrcSc} type="audio/mp3" autoPlay />
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_3_1')}>
                    {gameStories[selectedGame].sc2_3_1}
                  </button>
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_3_2')}>
                    {gameStories[selectedGame].sc2_3_2}
                  </button>
                </div>
                ) :selectedScenario === 'sc1_2_2' ? (
                  <div>
                  <p>{gameStories[selectedGame].par2_4}</p>
                  <audio ref={audioRef} src={audioSrcSc} type="audio/mp3" autoPlay />
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_4_1')}>
                    {gameStories[selectedGame].sc2_4_1}
                  </button>
                  <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2_4_2')}>
                    {gameStories[selectedGame].sc2_4_2}
                  </button>
                </div>
                ):(<h1>Ciąg dalszy nastąpi...</h1>
)}
              </div>
                ) : (
                  <div className="paragraphOne">
                    <p>{gameStories[selectedGame].intro}</p>
                    <audio ref={audioRef} src={audioSrc} type="audio/mp3" autoPlay />
                    <button className="buttonSelectionScennario" onClick={() => selectScenario('sc1')}>
                      {gameStories[selectedGame].sc1}
                    </button>
                    <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2')}>
                      {gameStories[selectedGame].sc2}
                    </button>
                  </div>
                )}
              </div>
            ) : (
          <div className="welcome-text">
            {[...text].map((letter, index) => (
              <span key={index} className="bounce-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        )
      ) : (
        <div className="home-container">
          <h1 className="game-title">Welcome to Paragraph Game!</h1>
          <button className="start-button" onClick={startGame}>
            Start
          </button>
        </div>
      )}
      {gameStarted && !selectedGame && (
        <div className="game-selection">
          <h2 className="select-game">Select a game:</h2>
          <button className="buttonSelectionGame" onClick={() => selectGame('Enzo and Nova')}>
            Enzo and Nova
          </button>
          <button className="buttonSelectionGame" onClick={() => selectGame('Super Tommy')}>
            Super Tommy
          </button>
        </div>
      )}
    </div>
  );
      };
export default Home;
