import { Component, Prop, State, h } from '@stencil/core';

/**
  * @name Route
  * @module ionic
  * @description
 */
@Component({
  tag: 'stencil-route'
})
export class Route {
  routerInstance: any;

  @Prop() url: string;

  @Prop() component: string;

  @Prop() componentProps: any = {};

  // The instance of the router
  @Prop() router: any;

  //@Prop() match: any;
  @State() match: any = {};

  componentWillLoad() {
    this.routerInstance = document.querySelector(this.router)

    // HACK
    this.routerInstance.addEventListener('ionRouterNavigation', (e) => {
      this.match = e.detail;
    })
  }

  render() {
    this.match.url = this.routerInstance.$instance.routeMatch.url;
    const match = this.match
    const ChildComponent = this.component

    console.log('Does match match?', match.url, this.url)

    //return <p></p>;

    if(match.url == this.url) {
      console.log(`  <ion-route> Rendering route ${this.url}`, this.router, match);
      return (<ChildComponent props={this.componentProps} />);
    } else {
      return null;
    }
  }
}
