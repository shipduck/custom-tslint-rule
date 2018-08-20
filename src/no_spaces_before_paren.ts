import ts from 'typescript';
import lint from 'tslint';

export class Rule extends lint.Rules.AbstractRule {
	public apply(sourceFile: ts.SourceFile): lint.RuleFailure[] {
		return this.applyWithWalker(new NoSpacesBeforeParenWalker(sourceFile, this.getOptions()));
	}
}

class NoSpacesBeforeParenWalker extends lint.RuleWalker {
	protected visitIfStatement(node: ts.IfStatement) {


		super.visitIfStatement(node);
	}
}
