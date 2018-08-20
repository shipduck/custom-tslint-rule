import ts from 'typescript';
import lint from 'tslint';

export class Rule extends lint.Rules.AbstractRule {
	public apply(sourceFile: ts.SourceFile): lint.RuleFailure[] {
		return this.applyWithWalker(new NoMeaningLessSpacesWalker(sourceFile, this.getOptions()));
	}
}

class NoMeaningLessSpacesWalker extends lint.RuleWalker {
	protected visitNode(node: ts.Node): void {

		super.visitNode(node);
	}
}
