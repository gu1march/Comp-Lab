interface Props {
  main_title: string;
  left_title: string;
  main_paragraph: string;
  button_text: string;
  feature_title: string[];
  feature_paragraph: string[];
  feature_imgs_path: string[];
}

export default function Feature({
  main_title,
  left_title,
  main_paragraph,
  button_text,
  feature_title,
  feature_paragraph,
  feature_imgs_path,
}: Props) {
  return (
    <>
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">{main_title}</h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">{left_title}</h2>
            <p className="text-body-secondary">{main_paragraph}</p>
            <a href="#" className="btn btn-primary btn-lg">
              {button_text}
            </a>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              {feature_title.map((item, index) => (
                <div className="col d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <img src={feature_imgs_path[index]} />
                    </svg>
                  </div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis">
                    {item}
                  </h4>
                  <p className="text-body-secondary">
                    {feature_paragraph[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
