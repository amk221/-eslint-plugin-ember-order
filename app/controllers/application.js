import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  get foo() {
    return null;
  }

  @action bar() {}

  @service baz;
}
