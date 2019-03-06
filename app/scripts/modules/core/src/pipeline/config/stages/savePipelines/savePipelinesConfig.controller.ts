import { IController, IScope } from 'angular';
import { defaults } from 'lodash';

export class SavePipelinesConfigCtrl implements IController {
  public state = {
    loaded: false,
  };

  public artifactSource = 'artifact';

  public static $inject = ['$scope'];
  constructor(private $scope: IScope) {
    if (this.$scope.stage.isNew) {
      defaults(this.$scope.stage, {
        pipelinesArtifactAccount: '',
        source: this.artifactSource,
      });
    }
    this.state.loaded = true;
    $scope.artifact = {
      id: '',
      source: 'expectedArtifact',
    };
  }

  public onExpectedArtifactSelected = (artifact: any) => {
    console.log('onExpectedArtifactSelected');
    this.$scope.$applyAsync(() => {
      this.$scope.stage.pipelinesArtifactId = artifact.id;
      this.$scope.stage.pipelinesArtifactAccount = artifact.matchArtifact.artifactAccount;
    });
  };
}
