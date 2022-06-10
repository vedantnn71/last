// til å vise antall mulige poeng og poengsummen

// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function Header({ maxPoints, score }) {
    // TODO: Legge til nødvendig logikk. Hvis nødvendig.
    return (
      <header className="mt-6 p-4">
        <h1 data-testid="title" className="font-base text-lg">
          <span
            data-testid="points"
            className="border border-slate-200 px-4 py-2 font-bold"
          >
            {score}
          </span>
          poeng (<span data-testid="total">{maxPoints}</span>)
        </h1>
      </header>
    )
  }