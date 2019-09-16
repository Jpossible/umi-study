import Redirect from 'umi/redirect';
import Prompt from 'umi/prompt';
export default (props) => {
  if (Math.random() > 0.5) {
    return (
      <Redirect to="/" />
  );
  }
  return (
    <>
    <h1>Prompt</h1>
    <Prompt
  when={true}
  message={location => {
    return window.confirm(`confirm to leave to ${location.pathname}?`);
  }}
  />
  </>
);
}
