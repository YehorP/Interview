import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Subject, of } from 'rxjs';
import { Category } from '../../models/category.model';
import { ChatInfo } from '../../models/chat-info.model';
import { ChatsListComponent } from './chats-list.component';
import { categoryMock } from '../../mocks/category.mock';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { categoriesMock } from '../../mocks/categories.mock';

describe('ChatsListComponent', () => {
  let component: ChatsListComponent;
  let fixture: ComponentFixture<ChatsListComponent>;
  let activatedRouteStub: Partial<ActivatedRoute>;
  let categoriesData: Category[];

  beforeEach(async () => {
    categoriesData = categoriesMock;

    activatedRouteStub = {
      data: new Subject<{chats: Category[]}>(),
    };

    await TestBed.configureTestingModule({
      declarations: [ ChatsListComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand category when panel is opened', () => {
    const categoryName = categoriesData[0].categoryName;
    component.categoriesExpanded[categoryName] = false;
    const event = { source: { _elementRef: { nativeElement: { classList: { add: () => null } } } } };
    component.handlePanelToggle(categoryName);
    expect(component.categoriesExpanded[categoryName]).toBe(true);
  });

  it('should collapse category when panel is closed', () => {
    const categoryName = categoriesData[0].categoryName;
    component.categoriesExpanded[categoryName] = true;
    const event = { source: { _elementRef: { nativeElement: { classList: { remove: () => null } } } } };
    component.handlePanelToggle(categoryName);
    expect(component.categoriesExpanded[categoryName]).toBe(false);
  });

  it('should emit chat selection event when chat is clicked', () => {
    const chat: ChatInfo = categoriesData[0].chats[0];
    spyOn(component.chatSelection, 'emit');
    component.handleChatSelection(chat);
    expect(component.chatSelection.emit).toHaveBeenCalledWith(chat);
  });
});