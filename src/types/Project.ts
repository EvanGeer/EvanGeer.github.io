export default interface Project {
  id: number;
  key: string;
  title: string;
  org: string;
  openSource: boolean;
  technologies: string[];
  summary: string;
  details: string;
  imgSrc: string;
  highlight: boolean;
  hide: boolean;
  repo: string;
  deployment: string;
  markdown: string;
}
